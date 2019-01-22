import * as mongodb from 'mongodb';
import { Authenticator } from '../Authentication/Authenticate';
import { IAuth } from '../Authentication/IAuth';

export class Database extends Authenticator {
    private MongoClient = mongodb.MongoClient;
    private dburl: string = 'mongodb://localhost:27017';
    public dbName: string = 'myproject';
    public client = new this.MongoClient(this.dburl, { useNewUrlParser: true });

    /**
     * Class for database operations
     */
    constructor(private authen: IAuth) {
        super(authen);
    }
    /**
     * connect to the database
     */
    connect(){
        this.client.connect(err => {
            console.log("Connected successfully to mongodb");
            const db = this.client.db(this.dbName);
            this.query(db);
        });
    }

    public close() {
        this.client.close();
    }

    public query(db: mongodb.Db) {

    }
}