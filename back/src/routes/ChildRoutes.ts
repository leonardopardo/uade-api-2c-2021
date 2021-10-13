import { ChildController } from "../controllers/ChildController";
import { Router } from "express";

export class ChildRoutes {
    public childController: ChildController = new ChildController();
    public path: string = '/childs';
    public create: string = '/create';
    public change: string = '/change';
    public delete: string = '/delete';

    public routes(router: Router): void {
        router
            .get(this.path, this.childController.index)
            .post(this.path, this.childController.store)
            .post(this.path + this.create, this.childController.create)
            .post(this.path + this.change, this.childController.change)
            .post(this.path + this.delete, this.childController.delete);
    }
}