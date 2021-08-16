import { Request, Response } from "express";

export class UserController {
    public index(req: Request, res: Response){
        res.json('user controller index xxx');
    }

    public store(req: Request, res: Response){
        res.json('user controller store');
    }
}