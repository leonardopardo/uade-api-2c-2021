import { UserController } from "../controllers/UserController";
import Authorize from "../utils/authorization";
import { Router } from "express";

export class UserRoutes {
    public userController: UserController = new UserController();
    public path: string = '/users';
    public create: string = '/create';
    public delete: string = '/delete';
    public change_email: string = '/change_email';
    public change_password: string = '/change_password';
    public login: string = '/login';

    public routes(router: Router): void {
        router
            .get(this.path, this.userController.index)
            .post(this.path, this.userController.store)
            .post(this.path+this.create, this.userController.create)
            .post(this.path+this.delete, Authorize, this.userController.delete)
            .post(this.path+this.change_email, Authorize, this.userController.change_email)
            .post(this.path+this.change_password, Authorize, this.userController.change_password)
            .post(this.path+this.login, this.userController.login);
    }
}