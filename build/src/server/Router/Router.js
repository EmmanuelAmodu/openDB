"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadHandler_1 = require("../Services/ReadHandler");
var CreateHandler_1 = require("../Services/CreateHandler");
exports.router = [
    {
        method: "get",
        path: "/api/read/:collection",
        handlerfunc: function (request, response) {
            var getServ = new ReadHandler_1.ReadHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/create/:collection",
        handlerfunc: function (request, response) {
            var getServ = new CreateHandler_1.CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "put",
        path: "/api/:collection",
        handlerfunc: function (request, response) {
            // const getServ = new ReadHandler(request);
            // response.send(getServ.result);
        }
    },
    {
        method: "delete",
        path: "/api/:collection",
        handlerfunc: function (request, response) {
            // const getServ = new ReadHandler(request);
            // response.send(getServ.result);
        }
    }
];
