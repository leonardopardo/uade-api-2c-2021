import { Request, Response } from "express";
import { ControlModel } from "../models/Control";

export class ControlController {
    public index(req: Request, res: Response){
        res.json('Control controller index');
    }

    public store(req: Request, res: Response){
        res.json('Control controller store');
    }
}