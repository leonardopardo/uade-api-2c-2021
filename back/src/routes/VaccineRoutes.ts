import { VaccineController } from "../controllers/VaccineController";
import { Router } from "express";

export class VaccineRoutes {
    public vaccineController: VaccineController = new VaccineController();
    public path: string = '/vaccines';

    public routes(router: Router): void {
        router
            .get(this.path, this.vaccineController.index)
            .post(this.path, this.vaccineController.store);
    }
}