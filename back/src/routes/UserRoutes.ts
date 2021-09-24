import { UserController } from "../controllers/UserController";
import { Router } from "express";

export class UserRoutes {
    public userController: UserController = new UserController();
    public path: string = '/users';
    public create: string = '/create';
    public delete: string = '/delete';
    public change_email: string = '/change_email';
    public change_password: string = '/change_password';

    public routes(router: Router): void {
        router
            .get(this.path, this.userController.index)
            .post(this.path, this.userController.store)
            .post(this.path+this.create, this.userController.create)
            .post(this.path+this.delete, this.userController.delete)
            .post(this.path+this.change_email, this.userController.change_email)
            .post(this.path+this.change_password, this.userController.change_password);
    }
}