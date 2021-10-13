import { Request, Response } from "express";
import { ControlModel } from "../models/Control";

export class ControlController {
    public index(req: Request, res: Response){
        res.json('Control controller index');
    }

    public store(req: Request, res: Response){
        res.json('Control controller store');
    }

    async create(req: Request, res: Response){
        try{
            // We dont really care if a control already exists for the creation
            const new_control = new ControlModel({
                child_dni: req.body['child_dni'],
                parent_dni: req.body['parent_dni'],
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
            });
            await new_control.save();
            res.status(200).json('Successfully created new control for child with DNI '+ req.body['child_dni']);
        } catch {
            // We add the email and password to our database
            res.status(400).json("Something went wrong");
        }
    }

    async delete(req: Request, res: Response){
        try{
            // We remove the user with this email
            const control = await ControlModel.findOneAndDelete({
                child_dni: req.body['child_dni'],
                parent_dni: req.body['parent_dni'],
                date: req.body['date']
            });
            res.status(200).json("Deleting control for child with DNI " + req.body['child_dni'] + " and date " + req.body['date']);
        } catch {
            // If an exception is raised, it means that there was no user with that email
            res.status(400).json('Something went wrong');
        }
    }
}