import { UserController } from "../controllers/UserController";
import { Router } from "express";

export class UserRoutes {
    public userController: UserController = new UserController();
    public path: string = '/users';

    public routes(router: Router): void {
        router
            .get(this.path, this.userController.index)
            .post(this.path, this.userController.store);
    }
}