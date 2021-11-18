import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import{ SMTPClient, Message } from 'emailjs';
import { encode, decode } from 'js-base64';

import { Request, Response } from "express";
import { UserModel, IUser } from '../models/User';
import { UserService } from '../services/UserService';
import uploadAvatar from './../utils/upload';


export class UserController {

    async getUser(req: Request, res: Response){
        const service = new UserService();
        const user = await service.findById(req.body["id"])
        res.status(200).json({"data": user});
    }

    async create(req: Request, res: Response){
        try{
            
            const service = new UserService();

            const userExist = await service.findByEmail(req.body["username"])

            if(userExist !== null)
                throw new Error("El email " + req.body["username"] + " ya existe, recupere su contraseña o utilice otra cuenta de email.");

            const userIdentityExist = await service.findByIdentity(req.body["identity"])

            if(userIdentityExist !== null)
                throw new Error("El DNI " + req.body["identity"] + " ya existe, recupere su contraseña del email asociado");

            const newUser: IUser = {
                firstname: req.body["firstName"],
                lastname: req.body["lastName"],
                username: req.body["username"],
                password: req.body["password"],
                identity: req.body["identity"],
                phone: req.body["phone"],
                age: new Date("0000-00-00")
            }

            await service.create(newUser);

            return res
                .status(201)
                .json({
                    data: newUser.username,
                    message: `El usuario ${newUser.username} ha sido creado correctamente, pude ingresar desde la página de login.`
                })
            
        } catch (e) {
            return res
            .status(400)
            .json({
                message: "Ocurrió un error al crear el usuario.",
                error: e.message
            });
        }
    }

    async delete(req: Request, res: Response){
        try{
            // We remove the user with this email
            const user = await UserModel.findOneAndDelete({email: req.body['email']});
            res.status(200).json("Deleting user with email" + user.email);
        } catch {
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json('No user exists with email '+ req.body['email']);
        }
    }
    
    async update_profile(req: Request, res: Response){
        try{
            
            // Image Handle
            //const sth = await uploadAvatar(req,res)
            //console.log(sth)
            
            const service: UserService = new UserService();
            
            const user: IUser = await service.findByEmail(req.body['email'])

            if(user === null)
                throw new Error("El email ingresado no es encuentra en nuestra base de datos.");

            if(req.body['identity'] != user.identity)
                throw new Error("El campo DNI no puede ser modificado.");

            user.firstname = req.body['firstName']
            user.lastname = req.body['lastName']
            user.age = req.body['age']
            user.phone = req.body['phone']
            user.username = req.body['email']

            await service.update(user)

            res
                .status(200)
                .json({
                message: `Los datos del usuario se actualizaron correctamente.`
            });
            
        } catch(e) {
            
            res
                .status(401)
                .json({
                    message:"Ocurrió un error al actualizar los datos.",
                    error: e.message
                });
        }
    }

    // Guarda que esta el change y el recovery
    async change_password(req: Request, res: Response){

        try{
            const service: UserService = new UserService();
            
            const user: IUser = await service.findByEmail(req.body['email']);

            if(user === null)
                throw new Error("El email ingresado no es encuentra en nuestra base de datos.");
            
            var hashedPassword = bcrypt.hashSync(req.body['password'], 8);
            
            user.password = hashedPassword;
            
            await service.updatePassword(user)
            
            res
                .status(200)
                .json({
                    message: "La contraseña se actualizó correctamente."
                });

        } catch (e) {
            res
                .status(400)
                .json({
                    message: "Ocurrió un error al intentar modificar la contraseña.",
                    error: e.message
                });
        }
    }

    async login(req: Request, res: Response){
        try{

            const service = new UserService();

            // We first search if there is an existing user with this email and password
            const user: IUser = await service.findByUsername(req.body['username']);

            // When the user not exists in database
            if(user===null) 
                throw new Error("Usuario o contraseña Incorrectos");

            const passwordIsValid = bcrypt.compareSync(req.body['password'], user.password);
            
            //Login failed due to invalid password
            if (!passwordIsValid) 
                throw new Error("Usuario o contraseña Incorrectos");

            // If successful, return auth token
            var token = jwt.sign({
                id: user.id
            }, "secreto", {
                expiresIn: 86400 // expires in 24 hours
            });

            return res.status(200).json({token});

        } catch (e){
            // If an exception is raised, it means that there was no user with that email
            return res.status(401).json({
                message: e.message
            });
        }
    }

    async restorePassword(req: Request, res: Response) {

        try {

            const service: UserService = new UserService();
    
            const user: IUser = await service.findByEmail(req.body["email"])

            if(user === null)
                throw new Error("El email ingresado no se encuentra en nustra base de datos.")

            // SMTP ====================================
            const client = new SMTPClient({
                host: 'localhost',
                port: 1025
            });

            const token = encode((Math.random() + 1).toString(36).substring(7), true)

            const path = `http://localhost:3000/confirm-password?user=${user.username}&token=${token}`

            const message = new Message({
                from: 'Padres al Día <info@padresaldia.com.ar>',
                to: user.username,
                subject: 'Padres al Día - Reseteo de Contraseña',
                text: 'algún texto',
                attachment: [
                    { data: `
                        <div style="font-family: Arial, Helvetica, Sans Serif;">
                            <h3>Estimado ${user.firstname}</h3>
                            <p>
                                Estás intentando resetear tu contraseña, por favor seguí el link a continuación:<br>
                                <a href="${path}">${path}</a>
                            </p>
                            <p>
                                Saludos <br>
                                Padres al Día
                            </p>
                        </div>
                        `, alternative: true 
                    },
                ]
            });

            user.restorePasswordToken = token;

            await service.update(user);
    
            await client.sendAsync(message);
            // SMTP ====================================

            return res
            .status(200)
            .json({
                message: 'Se ha enviado un email a su cuenta de correo para resetear sus credenciales.'
            })

        } catch (e) {
            return res
            .status(400)
            .json({
                message: e.message
            })
        }
    }

    async confirmPassword(req: Request, res: Response){
        try {
            const service: UserService = new UserService();

            // Check if the form email and param email is the same
            if (req.body['email'] != req.body['user'])
                throw new Error("Se han encontrado inconsistencias de email en el pedido");
            
            // We will now search for the email in our database
            const user: IUser = await service.findByEmail(req.body["email"])
            // We decode the token we received and compare it with the user token
            if (req.body['token'] != user.restorePasswordToken)
                throw new Error("Se han encontrado inconsistencias de token en el pedido")
                
            // We are in conditions of reseting the password now
            var hashedPassword = bcrypt.hashSync(req.body['password'], 8);
            // We then update the password
            user.password = hashedPassword;
            user.restorePasswordToken = null;

            await service.update(user);

            return res
            .status(200)
            .json({
                message: 'La contraseña ha sido re-establecida!'
            })

        } catch (e) {
            return res
            .status(400)
            .json({
                message: e.message
            }) 
        }
    }
}