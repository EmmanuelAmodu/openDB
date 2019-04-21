import { Database } from "../../database/database";
import * as Express from 'express';
import { Db } from "mongodb";

export class ReadHandler extends Database {
    public result: any;
    public arg: any = {};
    public collection: string;
    
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    constructor(private request: Express.Request, private response: Express.Response) {
        super();
        this.collection = this.request.params.collection;
        this.arg = this.request.body;
    }

    public query(db: Db) {
        const collection = db.collection(this.collection);
        collection.find(this.arg).toArray((err, res) => {
            err == null ? this.result = res : this.result = err;
            this.response.send(this.result);
            this.close();
        });
    }

    public runQuery() {
        this.connect();
    }
}
