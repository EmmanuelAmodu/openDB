import { Database } from "../../database/database";
import * as Express from 'express';
import { Db } from "mongodb";

export class CreateHandler extends Database {
    public result: any;
    public collection: string;
    
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    constructor(private request: Express.Request, private response: Express.Response) {
        super();
        this.dbName = this.request.params.tableName;
        this.collection = this.request.params.collection;
    }

    public query(db: Db) {
        const collection = db.collection(this.collection);
        if (this.request.body.constructor != Array) this.request.body = [this.request.body];
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
