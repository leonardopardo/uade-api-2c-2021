import { Request, Response } from "express";
import { IVaccineApplication } from "./../models/Vaccine";
import { VaccineService } from "./../services/VaccineService"

export class VaccineController {

    service: VaccineService;

    constructor(){
        this.service = new VaccineService();
    }

    async apply(req: Request, res: Response){
        try{
            // We first search if there is a child with that vaccine id
            const newApplication: IVaccineApplication = {
                parent_id: req.body['id'],
                child_dni: req.body['child_dni'],
                vaccine_id: req.body['vaccine_id'],
                date: req.body['date'],
                location: req.body['location']
            }
            this.service.applyVaccine(newApplication);

            return res
                .status(201)
                .json({
                    message: `Vacuna aplicada correctamente!`
                })
        } catch (e){
            return res
                .status(200)
                .json({
                    message: `Ocurrio un error al aplicar la vacuna`,
                    error: e.message
                })
        }
    }
}