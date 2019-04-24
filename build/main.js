"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./src/server/main");
var database_1 = require("./src/database/database");
var path = require("path");
var fs = require("fs");
var server = new main_1.ServerManager();
server.preInit = function () {
    var directoryPath = path.join(__dirname, '../Documents');
    fs.readdir(directoryPath, function (err, files) {
        if (err)
            return console.log('Unable to scan directory: ' + err);
        files.forEach(function (file) {
            var dbName = file.split(".")[0];
            var filePath = path.join(directoryPath, file);
            fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
                if (err)
                    return console.log(err);
                var json_data = JSON.parse(data);
                console.log("1", dbName, " ==> ", json_data);
                var database = new database_1.Database();
                database.query = function (db) {
                    var collection = db.collection(dbName);
                    collection.insertMany(json_data, function (err, result) {
                        err == null ?
                            console.log(dbName, " ==> result:", result) :
                            console.log(dbName, " ==> err:", err);
                        database.close();
                    });
                };
                database.connect();
            });
        });
    });
};
server.start();
//# sourceMappingURL=main.js.map