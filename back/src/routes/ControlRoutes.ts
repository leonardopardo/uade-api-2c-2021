import { ControlController } from "../controllers/ControlController";
import { Router } from "express";

export class ControlRoutes {
    public controlController: ControlController = new ControlController();
    public path: string = '/controls';

    public routes(router: Router): void {
        router
            .get(this.path, this.controlController.index)
            .post(this.path, this.controlController.store);
    }
}