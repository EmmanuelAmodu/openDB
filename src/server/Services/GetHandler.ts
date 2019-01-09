import { Database } from "../../database/database";

export class ReadHandler extends Database {
    public result: any;
    /**
     *
     */
    constructor(private query: any) {
        super();
        this.result = query;
    }

}