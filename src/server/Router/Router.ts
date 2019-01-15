import { IRoutes } from "./IRoutes";
import * as Express from 'express';
import { ReadHandler } from '../Services/ReadHandler';
import { CreateHandler } from "../Services/CreateHandler";

export const router: IRoutes[] = [
    {
        method: "get",
        path: "/api/read/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new ReadHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/create/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "put",
        path: "/api/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            // const getServ = new ReadHandler(request);
            // response.send(getServ.result);
        }
    },
    {
        method: "delete",
        path: "/api/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            // const getServ = new ReadHandler(request);
            // response.send(getServ.result);
        }
    }
];