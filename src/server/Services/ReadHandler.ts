import { Database } from "../../database/database";
import * as Express from 'express';
import { Db } from "mongodb";

export class ReadHandler extends Database {
    public result: any;
    
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    constructor(private request: Express.Request, private response: Express.Response) {
        super();
        this.dbName = this.request.params.collection;
    }

    public query(db: Db) {
        db.collection('documents').find({}).toArray((err, res) => {
            err == null ? this.result = res : this.result = err;
            this.response.send(this.result);
            this.close();
        });
    }

    public runQuery() {
        this.connect();
    }
}