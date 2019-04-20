import * as mongodb from 'mongodb';

export class Database  {
    private MongoClient = mongodb.MongoClient;
    private dburl: string = 'mongodb://localhost:27017';
    public dbName: string = 'OperationsManagerDB';
    public client = new this.MongoClient(this.dburl, { useNewUrlParser: true });

    /**
     * Class for database operations
     */
    constructor() {

    }
    /**
     * connect to the database
     */
    connect(){
        this.client.connect(err => {
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
