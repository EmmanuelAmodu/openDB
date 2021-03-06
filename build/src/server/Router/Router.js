"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadHandler_1 = require("../Services/ReadHandler");
var CreateHandler_1 = require("../Services/CreateHandler");
var DeleteHandler_1 = require("../Services/DeleteHandler");
exports.router = [
    {
        method: "post",
        path: "/api/read/:tableName/:collection",
        handlerfunc: function (request, response) {
            var getServ = new ReadHandler_1.ReadHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/create/:tableName/:collection",
        handlerfunc: function (request, response) {
            var getServ = new CreateHandler_1.CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/update/:tableName/:collection",
        handlerfunc: function (request, response) {
            var getServ = new CreateHandler_1.CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/delete/:tableName/:collection",
        handlerfunc: function (request, response) {
            var getServ = new DeleteHandler_1.DeleteHandler(request, response);
            getServ.runQuery();
        }
    }
];
//# sourceMappingURL=Router.js.map