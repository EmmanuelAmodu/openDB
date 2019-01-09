"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetHandler_1 = require("../Services/GetHandler");
exports.router = [
    {
        method: "get",
        path: "/:collection",
        handlerfunc: function (request, response) {
            var getServ = new GetHandler_1.GetHandler(request.body);
            response.send(getServ.result);
        }
    },
    {
        method: "post",
        path: "/:collection",
        handlerfunc: function (request, response) {
            var getServ = new GetHandler_1.GetHandler(request.body);
            response.send(getServ.result);
        }
    },
    {
        method: "put",
        path: "/:collection",
        handlerfunc: function (request, response) {
            var getServ = new GetHandler_1.GetHandler(request.body);
            response.send(getServ.result);
        }
    },
    {
        method: "delete",
        path: "/:collection",
        handlerfunc: function (request, response) {
            var getServ = new GetHandler_1.GetHandler(request.body);
            response.send(getServ.result);
        }
    }
];
