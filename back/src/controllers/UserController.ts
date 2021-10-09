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
            const new_user = new UserModel({
                email: req.body['email'],
                password: req.body['password']
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
            const user = await UserModel.findOne({email: req.body['email'], password: req.body['password']});
            // We then update the email
            user.email = req.body['new_email'];
            await user.save();
            res.status(200).json("User with email" + req.body['email'] + " updated to email " + req.body['new_email']);
        } catch {
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json('No user exists with email '+ req.body['email']);
        }
    }

    async change_password(req: Request, res: Response){
        try{
            // We first search if there is an existing user with this email and password
            const user = await UserModel.findOne({email: req.body['email'], password: req.body['password']});
            // We then update the password
            user.password = req.body['new_password'];
            await user.save();
            res.status(200).json("Password updated for user " + user.email);
        } catch {
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json('No user exists with email '+ req.body['email']);
        }
    }
}