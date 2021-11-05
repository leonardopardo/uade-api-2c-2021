import { VaccineController } from "../controllers/VaccineController";
import { Router } from "express";

export class VaccineRoutes {
    public vaccineController: VaccineController = new VaccineController();
    public path: string = '/vaccines';
    public apply: string = '/apply';

    public routes(router: Router): void {
        router
            .post(this.path+this.apply, this.vaccineController.apply);
    }
}