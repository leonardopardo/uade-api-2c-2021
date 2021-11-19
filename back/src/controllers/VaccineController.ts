import { Request, Response } from "express";
import { IVaccineApplication } from "./../models/Vaccine";
import { VaccineService } from "./../services/VaccineService"

export class VaccineController {

    constructor(){
        
    }

    async get(req: Request, res: Response){
        const service = new VaccineService();
        try{
            const vaccines = await service.getApplications(req.body['obj']['identity'], req.body['id'])
            return res
                .status(200)
                .json({
                    "data": vaccines
                })
        } catch (e){
            return res
                .status(400)
                .json({
                    message: `Ocurrio un error al cargar las vacunas`,
                    error: e.message
                })
        }
    }

    async apply(req: Request, res: Response){
        const service = new VaccineService();
        try{
            // We first search if there is a child with that vaccine id
            const newApplication: IVaccineApplication = {
                parent_id: req.body['id'],
                child_dni: req.body['identity'],
                vaccine_id: req.body['vaccine_id'],
                date: req.body['date'],
                location: req.body['place'],
                applied: true
            }
            console.log(newApplication)
            await service.applyVaccine(newApplication);

            return res
                .status(201)
                .json({
                    message: `Vacuna aplicada correctamente!`
                })
        } catch (e){
            return res
                .status(400)
                .json({
                    message: `Ocurrio un error al aplicar la vacuna`,
                    error: e.message
                })
        }
    }
}