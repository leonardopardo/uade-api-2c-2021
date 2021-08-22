import { Request, Response } from "express";
import { UserModel } from "../models/User";

export class UserController {
    public index(req: Request, res: Response){
        res.json('User controller index');
    }

    public store(req: Request, res: Response){
        res.json('User controller store');
    }

    async create(req: Request, res: Response){
        try{
            // We first search if there is an existing user with this email
            const user = await UserModel.findOne({email: req.body['email']});
            console.log(user)
            res.json("User with email" + user.email + " already exists");
        } catch {
            // We add the email and password to our database
            const new_user = new UserModel({
                email: req.body['email'],
                password: req.body['password']
            });
            await new_user.save();
            res.json('Successfully created user with email '+ req.body['email']);
        }
    }

    public delete(req: Request, res: Response){
        res.json('User delete');
    }
    
    public change_email(req: Request, res: Response){
        res.json('User change email');
    }

    public change_password(req: Request, res: Response){
        res.json('User change password');
    }
}