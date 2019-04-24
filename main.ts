import { ServerManager } from './src/server/main';
import { Database } from './src/database/database';
import * as path from 'path';
import * as fs from 'fs';
import { Db } from 'mongodb';

const server = new ServerManager();
server.preInit = () => {
    const directoryPath = path.join(__dirname, '../Documents');
    fs.readdir(directoryPath, function (err, files) {
        if (err) return console.log('Unable to scan directory: ' + err);
        files.forEach(function (file) {
            const dbName = file.split(".")[0];
            const filePath = path.join(directoryPath, file);

            fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
                if (err) return console.log(err);
                const json_data = JSON.parse(data);
                console.log("1", dbName, " ==> ", json_data);
                const database: Database = new Database();
                database.query = (db: Db) => {
                    const collection = db.collection(dbName);
                    collection.insertMany(json_data, (err, result) => {
                        err == null ? 
                            console.log(dbName, " ==> result:", result) :  
                                console.log(dbName, " ==> err:", err);
                        database.close();
                    });
                }
                database.connect();
            })
        });
    });

}

server.start();
