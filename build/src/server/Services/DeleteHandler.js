"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../database/database");
var DeleteHandler = /** @class */ (function (_super) {
    __extends(DeleteHandler, _super);
    /**
     * create handler handles all create operation it can be extened by other classes
     */
    function DeleteHandler(request, response) {
        var _this = _super.call(this) || this;
        _this.request = request;
        _this.response = response;
        _this.collection = _this.request.params.collection;
        return _this;
    }
    DeleteHandler.prototype.query = function (db) {
        var _this = this;
        var collection = db.collection(this.collection);
        collection.deleteMany(this.request.body, function (err, result) {
            err == null ? _this.result = result : _this.result = err;
            _this.response.send(_this.result.result);
            _this.close();
        });
    };
    DeleteHandler.prototype.runQuery = function () {
        this.connect();
    };
    return DeleteHandler;
}(database_1.Database));
exports.DeleteHandler = DeleteHandler;
//# sourceMappingURL=DeleteHandler.js.map