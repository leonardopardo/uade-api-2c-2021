import { Request, Response } from "express";
import { ControlService } from "./../services/ControlService";
import { IControl } from "./../models/Control";

export class ControlController {

    service: ControlService

    constructor(){
        this.service = new ControlService();
    }

    async create(req: Request, res: Response){
        try{
            // We dont really care if a control already exists for the creation
            const newControl: IControl = {
                child_dni: req.body['child_dni'],
                parent_id: req.body['id'],
                date: req.body['date'],
                weight: req.body['weight'],
                height: req.body['height'],
                head_diam: req.body['head_diam'],
                observations: req.body['observations'],
                meds: {

                    med_name: req.body['meds']['med_name'],
                    dosage: req.body['meds']['dosage'],
                    take_until: req.body['meds']['take_until']
                },
                studies: req.body['studies'],
                results: req.body['results']
            };
            await this.service.create(newControl)

            return res
                .status(201)
                .json({
                    message: `Se creo un nuevo control para hijo con DNI ${req.body['child_dni']}`
                })
        } catch (e){
            return res
                .status(200)
                .json({
                    message: "Ocurrió un error al crear el control.",
                    error: e.message
            });
        }
    }

    async delete(req: Request, res: Response){
        try{
            
            await this.service.deleteBasedOnDate(req.body['id'], req.body['child_dni'], req.body['date'])

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