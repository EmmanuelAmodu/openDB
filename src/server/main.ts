import * as Express from 'express';
import { Authenticator } from '../Authentication/Authenticate';
import { router } from './Router/Router';
import { IRoutes } from './Router/IRoutes';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';

export class ServerManager {
    public port: number = 8900;
    private express = Express();
    private routes: IRoutes[] = router;
    private multerU = multer();

    constructor() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        // this.express.use("/api", this.validateUser);
        this.express.use(this.setHeaders);
        this.express.options("/*", (req, res) => res.sendStatus(200));

        this.routes.forEach(route => {
            this.express[route.method](route.path, this.multerU.array(), route.handlerfunc);
        });
    }

    private setHeaders = (req: Express.Request, res: Express.Response, next: Function) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    }

    private validateUser(request: Express.Request, response: Express.Response, next) {
        let auth = Buffer.from(request.headers.authorization.split(" ")[1], 'base64').toString().split(":");
        let authen = new Authenticator({
            username: auth[0],
            password: auth[1]
        });
        authen.isValid() ? next() :
        response.status(401).json({
            status: "request failed",
            reason: "Authentication failed",
            solution: "Contact Adminstrator"
        });
    }

    public preInit = () => {

    }

    public start() {
        this.preInit();
        this.express.listen(this.port, () => console.log(`Open app listening on port ${this.port}!`));
    }
}
