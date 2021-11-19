import { Request, Response } from "express";
import { ControlService } from "./../services/ControlService";
import { IControl } from "./../models/Control";

export class ControlController {

    async create(req: Request, res: Response){
        console.log(req.body)
        const service = new ControlService();
        try{
            // Meds may be empty
            let meds = null
            if(req.body['meds_checked']){
                meds = {
                    "med_name": req.body['med_name'],
                    "dosage": req.body['dosage'],
                    "take_until": req.body['take_until']
                }
            }
            // We dont really care if a control already exists for the creation
            const newControl: IControl = {
                child_dni: req.body['identity'],
                parent_id: req.body['id'],
                date: req.body['date'],
                weight: req.body['weight'],
                height: req.body['height'],
                head_diam: req.body['diameter'],
                observations: req.body['observations'],
                meds: meds,
                studies: req.body['studies'],
                results: req.body['results']
            };

            await service.create(newControl)

            return res
                .status(201)
                .json({
                    message: `Se creo un nuevo control para hijo con DNI ${req.body['identity']}`
                })
        } catch (e){
            return res
                .status(400)
                .json({
                    message: "Ocurrió un error al crear el control.",
                    error: e.message
            });
        }
    }

    async delete(req: Request, res: Response){
        const service = new ControlService();
        try{
            
            await service.deleteBasedOnDate(req.body['id'], req.body['child_dni'], req.body['date'])

            return res
                .status(201)
                .json({
                    message: `Se ha borrado el control correctamente`
                })
        } catch (e){
            return res
                .status(200)
                .json({
                    message: "Ocurrió un error al borrar el control.",
                    error: e.message
            });
        }
    }
}