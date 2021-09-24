import { Request, Response } from "express";
import { ParentModel } from "../models/Parent";

export class ParentController {
    public index(req: Request, res: Response){
        res.json('Parent controller index');
    }

    public store(req: Request, res: Response){
        res.json('Parent controller store');
    }
}