import { Request, Response } from "express";
import { ChildModel } from "../models/Child";

export class ChildController {
    public index(req: Request, res: Response){
        res.json('Child controller index');
    }

    public store(req: Request, res: Response){
        res.json('Child controller store');
    }

    async create(req: Request, res: Response){
        try{
            // We first search if there is an existing child with the parent and child DNI
            const child = await ChildModel.findOne({dni: req.body['dni'], parent_dni: req.body['parent_dni']});
            res.status(400).json("Child with DNI" + child.dni + " already exists");
        } catch {
            // We add the child to our database
            const new_child = new ChildModel({
                dni: req.body['dni'],
                parent_dni: req.body['parent_dni'],
                name: req.body['name'],
                surname: req.body['surname'],
                birthdate: req.body['birthdate'],
                allergies: req.body['allergies'],
                diseases: req.body['diseases']
            });
            await new_child.save();
            res.status(200).json('Successfully created child with DNI '+ req.body['dni']);
        }
    }

    // We will only let users change non-key fields such as name, surname, etc
    async change(req: Request, res: Response){
        try{
            // We first search if there is an existing child with the parent and child DNI
            const child = await ChildModel.findOne({dni: req.body['dni'], parent_dni: req.body['parent_dni']});
            child.name = req.body['name']
            child.surname = req.body['surname']
            child.birthdate = req.body['birthdate']
            child.allergies = req.body['allergies']
            child.diseases = req.body['diseases']
            res.status(200).json("Child with DNI" + child.dni + " has been modified");
        } catch {
            res.status(400).json("Child with DNI " + req.body['dni'] + " does not exist");
        }
    }

    async delete(req: Request, res: Response){
        try{
            const child = await ChildModel.findOneAndDelete({dni: req.body['dni'], parent_dni: req.body['parent_dni']});
            res.status(200).json("Child with DNI" + req.body['dni'] + " has been deleted");
        } catch {
            res.status(400).json("Child with DNI " + req.body['dni'] + " does not exist");
        }
    }
}