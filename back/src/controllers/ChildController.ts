import { Request, Response } from "express";
import { ChildModel } from "../models/Child";

export class ChildController {
    public index(req: Request, res: Response){
        res.json('Child controller index');
    }

    public store(req: Request, res: Response){
        res.json('Child controller store');
    }
}