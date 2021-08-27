import { ParentController } from "../controllers/ParentController";
import { Router } from "express";

export class ParentRoutes {
    public parentController: ParentController = new ParentController();
    public path: string = '/parents';

    public routes(router: Router): void {
        router
            .get(this.path, this.parentController.index)
            .post(this.path, this.parentController.store);
    }
}