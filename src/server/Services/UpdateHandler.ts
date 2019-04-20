import { Database } from "../../database/database";
import * as Express from 'express';
import { Db } from "mongodb";

export class UpdateHandler extends Database {
    public result: any;
    public collection: string;
    
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    constructor(private request: Express.Request, private response: Express.Response) {
        super();
        this.collection = this.request.params.collection;
    }

    public query(db: Db) {
        const collection = db.collection(this.collection);
        collection.updateMany(this.request.body.qy, this.request.body.val, (err, result) => {
            err == null ? this.result = result : this.result = err;
            this.response.send(this.result.result);
            this.close();
        });
    }

    public runQuery() {
        this.connect();
    }
}
