import { Request, Response } from "express";
import { VaccineModel } from "../models/Vaccine";

export class VaccineController {
    public index(req: Request, res: Response){
        res.status(200).json('Vaccine controller index');
    }

    public store(req: Request, res: Response){
        res.status(200).json('Vaccine controller store');
    }

    async create(req: Request, res: Response){
        try{
            // We first search if there is an existing vaccine with this id
            const vaccine = await VaccineModel.findOne({vaccine_id: req.body['vaccine_id'], child_dni: req.body['child_dni']});
            res.status(400).json("Vaccine with ID " + vaccine.vaccine_id + " already exists");
        } catch {
            // We add the vaccine to our database
            const new_vaccine = new VaccineModel({
                vaccine_id: req.body['vaccine_id'],
                child_dni: req.body['child_dni'],
                date: req.body['date'],
                location: req.body['location'],
                name: req.body['name'],
                description: req.body['description'],
                applied: req.body['applied']
            });
            await new_vaccine.save();
            res.status(200).json('Successfully created vaccine with id '+ req.body['vaccine_id']);
        }
    }

    async apply(req: Request, res: Response){
        try{
            // We first search if there is a child with that vaccine id
            const vaccine = await VaccineModel.findOne({vaccine_id: req.body['vaccine_id'], child_dni: req.body['child_dni']});
            vaccine.applied = true;
            vaccine.save();
            res.status(200).json("Applied vaccine with ID " + req.body['vaccine_id'] + " to child with DNI " + req.body['child_dni']);
        } catch {
            // This means there is no child with that DNI or that the vaccine does not exist
            res.status(400).json("Either the child or the vaccine does not exist");
        }
    }
}