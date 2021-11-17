import { UserController } from "../controllers/UserController";
import Authorize from "../utils/authorization";
import { Router } from "express";

export class UserRoutes {
    public userController: UserController = new UserController();
    public path: string = '/users';
    public create: string = '/create';
    public delete: string = '/delete';
    public update_profile: string = '/update_profile';
    public change_password: string = '/change_password';
    public login: string = '/login';
    public restore_password = '/restore-password';
    public confirm_password = '/confirm-password';
    public get_user = '/get_user';

    public routes(router: Router): void {
        router
            .get(this.path+this.get_user, Authorize, this.userController.getUser)
            .post(this.path+this.create, this.userController.create)
            .post(this.path+this.delete, Authorize, this.userController.delete)
            .post(this.path+this.update_profile, Authorize, this.userController.update_profile)
            .post(this.path+this.change_password, Authorize, this.userController.change_password)
            .post(this.path+this.login, this.userController.login)
            .post(this.path+this.restore_password, this.userController.restorePassword)
            .post(this.path+this.confirm_password, this.userController.confirmPassword);
    }
}