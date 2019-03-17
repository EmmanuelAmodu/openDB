import { Database } from "../../database/database";
import * as Express from 'express';
import { Db } from "mongodb";

export class ReadHandler extends Database {
    public result: any;
    public arg: any = {};
    
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    constructor(private request: Express.Request, private response: Express.Response) {
        super();
        this.dbName = this.request.params.database;
        this.arg = this.request.body;
    }

    public query(db: Db) {
        console.log(this.arg);
        db.collection('documents').find(this.arg).toArray((err, res) => {
            err == null ? this.result = res : this.result = err;
            this.response.send(this.result);
            this.close();
        });
    }

    public runQuery() {
        this.connect();
    }
}
