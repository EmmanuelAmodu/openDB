import { IRoutes } from "./IRoutes";
import * as Express from 'express';
import { ReadHandler } from '../Services/GetHandler';

export const router: IRoutes[] = [
    {
        method: "get",
        path: "/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new ReadHandler(request.body);
            response.send(getServ.result);
        }
    },
    {
        method: "post",
        path: "/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new ReadHandler(request.body);
            response.send(getServ.result);
        }
    },
    {
        method: "put",
        path: "/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new ReadHandler(request.body);
            response.send(getServ.result);
        }
    },
    {
        method: "delete",
        path: "/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new ReadHandler(request.body);
            response.send(getServ.result);
        }
    }
];