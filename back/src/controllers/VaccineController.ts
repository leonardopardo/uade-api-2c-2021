import { Request, Response } from "express";
import { VaccineModel } from "../models/Vaccine";

export class VaccineController {
    public index(req: Request, res: Response){
        res.json('Vaccine controller index');
    }

    public store(req: Request, res: Response){
        res.json('Vaccine controller store');
    }
}