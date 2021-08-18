"use strict";
exports.__esModule = true;
exports.UserRoutes = void 0;
var UserController_1 = require("../controllers/UserController");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.userController = new UserController_1.UserController();
        this.path = '/users';
    }
    UserRoutes.prototype.routes = function (router) {
        router
            .get(this.path, this.userController.index)
            .post(this.path, this.userController.store);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
