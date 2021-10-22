import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { Request, Response } from "express";
import { UserModel } from "../models/User";

export class UserController {
    public index(req: Request, res: Response){
        res.status(200).json("User controller index");
    }

    public store(req: Request, res: Response){
        res.status(200).json("User controller store");
    }

    async create(req: Request, res: Response){
        try{
            // We first search if there is an existing user with this email
            const user = await UserModel.findOne({email: req.body['email']});
            res.status(400).json("User with email" + user.email + " already exists");
        } catch {
            // We add the email and password to our database
            // We encrypt the password first
            var hashedPassword = bcrypt.hashSync(req.body['password'], 8);

            const new_user = new UserModel({
                email: req.body['email'],
                password: hashedPassword
            });
            await new_user.save();
            res.status(200).json('Successfully created user with email '+ req.body['email']);
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
    
    // TODO: This is prob not right, as for doing this the user must have logged in before
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
            const passwordIsValid = bcrypt.compareSync(req.body['password'], user.password);
            //Login failed due to invalid password
            if (!passwordIsValid) throw new Error("Invalid username/password");

            // If successful, return auth token
            var token = jwt.sign({
                id: user._id
            }, "secreto", {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json("Logged in " + user.email + " returned token " + token);
        } catch (e){
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json(e.message);
        }
    }
}