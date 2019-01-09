"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Authenticate_1 = require("../Authentication/Authenticate");
var RouteManager = /** @class */ (function () {
    /**
     *
     */
    function RouteManager(router) {
        this.router = router;
        this.routes();
    }
    RouteManager.prototype.routes = function () {
        this.router.use(this.validateUser.bind(this));
        this.router.get('/:collection', function (req, res) {
            res.json({ status: "sucess" });
        });
        this.router.post('/:collection', function (req, res) {
            res.send('Got a POST request');
        });
        this.router.put('/:collection', function (req, res) {
            res.send('Got a PUT request at /user');
        });
        this.router.delete('/:collection', function (req, res) {
            res.send('Got a DELETE request at /user');
        });
    };
    RouteManager.prototype.validateUser = function (request, response, next) {
        var auth = new Buffer(request.headers.authorization.split(" ")[1], 'base64').toString().split(":");
        this.authen = new Authenticate_1.Authenticator({
            username: auth[0],
            password: auth[1]
        });
        this.authen.isValid() ? next() : response.status(401).json({
            status: "request failed",
            reason: "Authentication failed",
            solution: "Contact Adminstrator"
        });
    };
    return RouteManager;
}());
exports.RouteManager = RouteManager;
