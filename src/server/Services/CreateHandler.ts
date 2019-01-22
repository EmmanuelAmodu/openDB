import { Database } from "../../database/database";
import * as Express from 'express';
import { Db } from "mongodb";
import { IAuth } from "../../Authentication/IAuth";

function authenParam(auth: string): IAuth {
    return null;
}

export class CreateHandler extends Database {
    public result: any;
    
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    constructor(private request: Express.Request, private response: Express.Response) {
        super(authenParam(request.headers.authorization));
        this.dbName = this.request.params.database;
    }

    public query(db: Db) {
        const collection = db.collection('documents');
        collection.insertMany(this.request.body, (err, result) => {
            err == null ? this.result = result : this.result = err;
            this.response.send(this.result.result);
            this.close();
        });
    }

    public runQuery() {
        this.connect();
    }
}