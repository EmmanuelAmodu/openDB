"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadHandler_1 = require("../Services/ReadHandler");
var CreateHandler_1 = require("../Services/CreateHandler");
var DeleteHandler_1 = require("../Services/DeleteHandler");
exports.router = [
    {
        method: "post",
        path: "/api/read/:collection",
        handlerfunc: function (request, response) {
            console.log(request.body);
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
        method: "post",
        path: "/api/update/:collection",
        handlerfunc: function (request, response) {
            var getServ = new CreateHandler_1.CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/delete/:collection",
        handlerfunc: function (request, response) {
            var getServ = new DeleteHandler_1.DeleteHandler(request, response);
            getServ.runQuery();
        }
    }
];
//# sourceMappingURL=Router.js.map