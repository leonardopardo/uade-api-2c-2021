import { VaccineController } from "../controllers/VaccineController";
import { Router } from "express";

export class VaccineRoutes {
    public vaccineController: VaccineController = new VaccineController();
    public path: string = '/vaccines';
    public create: string = '/create';
    public apply: string = '/apply';

    public routes(router: Router): void {
        router
            .get(this.path, this.vaccineController.index)
            .post(this.path, this.vaccineController.store)
            .post(this.path+this.create, this.vaccineController.create)
            .post(this.path+this.apply, this.vaccineController.apply);
    }
}