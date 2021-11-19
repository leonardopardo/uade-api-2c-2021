import { VaccineController } from "../controllers/VaccineController";
import { Router } from "express";
import Authorize from "../utils/authorization";

export class VaccineRoutes {
    public vaccineController: VaccineController = new VaccineController();
    public path: string = '/vaccines';
    public apply: string = '/apply';
    public get: string = '/get';

    public routes(router: Router): void {
        router
            .post(this.path+this.apply, Authorize,  this.vaccineController.apply)
            .post(this.path+this.get, Authorize,  this.vaccineController.get);
    }
}