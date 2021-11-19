import { Request, Response } from "express";
import { ChildService } from "./../services/ChildService";
import { UserService } from "./../services/UserService";
import { IChild } from "./../models/Child";
import { IUser } from "./../models/User";

export class ChildController {

    async getAll(req: Request, res: Response){
        const childService = new ChildService()
        const childrens: IChild = await childService.findAllByParentId(req.body['id'])
        return res.status(200).json({"data": childrens});
    }

    // TODO: Ver el tema de crear las vacunas
    async create(req: Request, res: Response){
        const service = new ChildService()
        try{
            // We first search if there is an existing child with the parent and child DNI
            const childExists = await service.findOneByDniAndParentId(req.body['identity'], req.body['id']);

            if(childExists !== null)
                throw new Error("Su usuario ya tiene cargado un hijo con DNI " + req.body["identity"]);


            const newChild: IChild = {
                parent_id: req.body["id"],
                dni: req.body["identity"],
                firstname: req.body["firstName"],
                lastname: req.body["lastName"],
                birthdate: req.body["age"],
                bloodtype: req.body["blod"],
                allergies: req.body["allergi"],
                diseases: req.body["chronic"],
                extra_info: req.body["information"],
                avatar: req.body["avatar"]
            }

            await service.create(newChild);

            return res
                .status(201)
                .json({
                    message: `El hijo ${newChild.firstname} ${newChild.lastname} ha sido creado correctamente`
                })

        } catch (e){
            return res
            .status(400)
            .json({
                message: "Ocurrió un error al crear el hijo.",
                error: e.message
            });
        }
    }

    // We will only let users change non-key fields such as name, surname, etc
    async update(req: Request, res: Response){
        const service = new ChildService()
        try{
            // We first search if there is an existing child with the parent and child DNI
            const childExists = await service.findOneByDniAndParentId(req.body['identity'], req.body['id']);

            if(childExists == null)
                throw new Error("El hijo con DNI " + req.body["identity"] + " no existe");

            let avatar = req.body['avatar'];

            if(Object.entries(avatar).length === 0)
                avatar = childExists.avatar

            const uChild: IChild = {
                parent_id: req.body["id"],
                dni: req.body["identity"],
                firstname: req.body["firstName"],
                lastname: req.body["lastName"],
                birthdate: req.body["age"],
                bloodtype: req.body["blod"],
                allergies: req.body["allergi"],
                diseases: req.body["chronic"],
                extra_info: req.body["information"],
                avatar: avatar
            }

            await service.update(uChild);

            return res
                .status(201)
                .json({
                    message: `El hijo con DNI ${childExists.dni} ha sido actualizado correctamente`
                })

        } catch (e){
            return res
            .status(400)
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