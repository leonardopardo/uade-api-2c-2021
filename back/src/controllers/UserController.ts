import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { Request, Response } from "express";
import { UserModel, IUser } from '../models/User';
import { UserService } from '../services/UserService';

export class UserController {
    
    async create(req: Request, res: Response){
        try{
            
            const service = new UserService();

            const userExist = await service.findByEmail(req.body["username"])

            if(userExist !== null)
                throw new Error("El email " + req.body["username"] + " ya existe, recupere su contraseña o utilice otra cuenta de email.");
                
            const newUser: IUser = {
                firstName: req.body["firstName"],
                lastName: req.body["lastName"],
                username: req.body["username"],
                password: req.body["password"]
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
            .status(200)
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
    
    async change_email(req: Request, res: Response){
        try{
            // We first search if there is an existing user with this email and password
            const user = await UserModel.findOne({email: req.body['email']});
            // We then update the email
            user.email = req.body['new_email'];
            await user.save();
            res.status(200).json("User with email" + req.body['email'] + " updated to email " + req.body['new_email']);
        } catch {
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json('No user exists with email '+ req.body['email']);
        }
    }

    // Guarda que esta el change y el recovery
    async change_password(req: Request, res: Response){
        try{
            // We first search if there is an existing user with this email and password
            const user = await UserModel.findOne({email: req.body['email']});
            var hashedPassword = bcrypt.hashSync(req.body['new_password'], 8);
            // We then update the password
            user.password = hashedPassword;
            await user.save();
            res.status(200).json("Password updated for user " + user.email);
        } catch {
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json('No user exists with email '+ req.body['email']);
        }
    }

    async login(req: Request, res: Response){
        try{
            // We first search if there is an existing user with this email and password
            const user = await UserModel.findOne({email: req.body['email']});
            
            // When the user not exists in database
            if(user===null) 
                throw new Error("Invalid username/password");

            const passwordIsValid = bcrypt.compareSync(req.body['password'], user.password);
            
            //Login failed due to invalid password
            if (!passwordIsValid) 
                throw new Error("Invalid username/password");

            // If successful, return auth token
            var token = jwt.sign({
                id: user._id
            }, "secreto", {
                expiresIn: 86400 // expires in 24 hours
            });

            return res.status(200).json("Logged in " + user.email + " returned token " + token);

        } catch (e){
            // If an exception is raised, it means that there was no user with that email
            return res.status(400).json(e.message);
        }
    }
}