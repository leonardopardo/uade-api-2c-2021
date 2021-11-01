import { ChildController } from "../controllers/ChildController";
import { Router } from "express";

export class ChildRoutes {
    public childController: ChildController = new ChildController();
    public path: string = '/childs';
    public create: string = '/create';
    public update: string = '/update';
    public delete: string = '/delete';

    public routes(router: Router): void {
        router
            .post(this.path + this.create, this.childController.create)
            .post(this.path + this.update, this.childController.update)
            .post(this.path + this.delete, this.childController.delete);
    }
}