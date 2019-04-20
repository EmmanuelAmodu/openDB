import { IRoutes } from "./IRoutes";
import * as Express from 'express';
import { ReadHandler } from '../Services/ReadHandler';
import { CreateHandler } from "../Services/CreateHandler";
import { DeleteHandler } from "../Services/DeleteHandler";

export const router: IRoutes[] = [
    {
        method: "post",
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
        method: "post",
        path: "/api/update/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/delete/:collection",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new DeleteHandler(request, response);
            getServ.runQuery();
        }
    }
];
