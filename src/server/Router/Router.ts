import { IRoutes } from "./IRoutes";
import * as Express from 'express';
import { ReadHandler } from '../Services/ReadHandler';
import { CreateHandler } from "../Services/CreateHandler";

export const router: IRoutes[] = [
    {
        method: "get",
        path: "/api/read/:database",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new ReadHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/create/:database",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "put",
        path: "/api/:database",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            response.send({"msg":"nothing implemented"});
        }
    },
    {
        method: "delete",
        path: "/api/:database",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            response.send({"msg":"nothing implemented"});
        }
    }
];
