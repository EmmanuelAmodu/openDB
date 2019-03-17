import { IRoutes } from "./IRoutes";
import * as Express from 'express';
import { ReadHandler } from '../Services/ReadHandler';
import { CreateHandler } from "../Services/CreateHandler";
import { DeleteHandler } from "../Services/DeleteHandler";

export const router: IRoutes[] = [
    {
        method: "post",
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
        method: "post",
        path: "/api/update/:database",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new CreateHandler(request, response);
            getServ.runQuery();
        }
    },
    {
        method: "post",
        path: "/api/delete/:database",
        handlerfunc: function(request: Express.Request, response: Express.Response) {
            const getServ = new DeleteHandler(request, response);
            getServ.runQuery();
        }
    }
];
