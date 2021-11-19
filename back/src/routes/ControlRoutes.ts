import { ControlController } from "../controllers/ControlController";
import { Router } from "express";

import Authorize from "./../utils/authorization";

export class ControlRoutes {
    public controlController: ControlController = new ControlController();
    public path: string = '/controls';
    public create: string = '/create';
    public delete: string = '/delete';

    public routes(router: Router): void {
        router
            .post(this.path + this.create, Authorize, this.controlController.create)
            .post(this.path + this.delete, Authorize, this.controlController.delete);
    }
}