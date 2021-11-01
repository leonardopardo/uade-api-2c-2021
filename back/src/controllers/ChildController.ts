import { Request, Response } from "express";
import { ChildService } from "./../services/ChildService";
import { IChild } from "./../models/Child";

export class ChildController {

    service: ChildService;

    constructor(){
        this.service = new ChildService();
    }

    // TODO: Ver el tema de crear las vacunas
    async create(req: Request, res: Response){
        try{
            // We first search if there is an existing child with the parent and child DNI
            const childExists = await this.service.findOneByDniAndParentDni(req.body['dni'], req.body['parent_dni']);

            if(childExists !== null)
                throw new Error("Su usuario ya tiene cargado un hijo con DNI " + req.body["dni"]);

            const newChild: IChild = {
                dni: req.body["dni"],
                parent_dni: req.body["parent_dni"],
                firstname: req.body["firstname"],
                lastname: req.body["lastname"],
                birthdate: req.body["birthdate"],
                allergies: req.body["allergies"],
                diseases: req.body["diseases"]
            }

            await this.service.create(newChild);

            return res
                .status(201)
                .json({
                    message: `El hijo ${newChild.firstname} ${newChild.lastname} ha sido creado correctamente`
                })

        } catch (e){
            return res
            .status(200)
            .json({
                message: "Ocurrió un error al crear el hijo.",
                error: e.message
            });
        }
    }

    // We will only let users change non-key fields such as name, surname, etc
    async update(req: Request, res: Response){
        try{
            // We first search if there is an existing child with the parent and child DNI
            const childExists = await this.service.findOneByDniAndParentDni(req.body['dni'], req.body['parent_dni']);

            if(childExists == null)
                throw new Error("El hijo con DNI " + req.body["dni"] + " no existe");

            const uChild: IChild = {
                dni: req.body["dni"],
                parent_dni: req.body["parent_dni"],
                firstname: req.body["firstname"],
                lastname: req.body["lastname"],
                birthdate: req.body["birthdate"],
                allergies: req.body["allergies"],
                diseases: req.body["diseases"]
            }

            await this.service.update(uChild);

            return res
                .status(201)
                .json({
                    message: `El hijo con DNI ${childExists.dni} ha sido creado correctamente`
                })

        } catch (e){
            return res
            .status(200)
            .json({
                message: "Ocurrió un error al actualizar el hijo.",
                error: e.message
            });
        }
    }

    // TODO: Hay que hacerlo bien, ya que habria que borrar todos los controles y vacunas del chico
    async delete(req: Request, res: Response){
        try{
            res.status(400).json("IMPLEMENT");
        } catch {
            res.status(400).json("IMPLEMENT");
        }
    }
}