import { ChildController } from "../controllers/ChildController";
import { Router } from "express";

export class ChildRoutes {
    public childController: ChildController = new ChildController();
    public path: string = '/childs';

    public routes(router: Router): void {
        router
            .get(this.path, this.childController.index)
            .post(this.path, this.childController.store);
    }
}