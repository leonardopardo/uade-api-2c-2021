"use strict";
exports.__esModule = true;
exports.UserController = void 0;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        res.json('user controller index');
    };
    UserController.prototype.store = function (req, res) {
        res.json('user controller store');
    };
    return UserController;
}());
exports.UserController = UserController;
