import { ChildController } from "../controllers/ChildController";
import { Router } from "express";
import Authorize from "./../utils/authorization";

export class ChildRoutes {
    public childController: ChildController = new ChildController();
    public path: string = '/childs';
    public create: string = '/create';
    public update: string = '/update';
    public delete: string = '/delete';
    public getChildren: string = '/get_children';

    public routes(router: Router): void {
        router
            .post(this.path + this.create, Authorize, this.childController.create)
            .post(this.path + this.update, Authorize, this.childController.update)
            .post(this.path + this.delete, Authorize, this.childController.delete)
            .get(this.path + this.getChildren, Authorize, this.childController.getAll);
    }
}