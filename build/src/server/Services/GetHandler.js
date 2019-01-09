"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../database/database");
var GetHandler = /** @class */ (function (_super) {
    __extends(GetHandler, _super);
    /**
     *
     */
    function GetHandler(query) {
        var _this = _super.call(this) || this;
        _this.query = query;
        _this.result = query;
        return _this;
    }
    return GetHandler;
}(database_1.Database));
exports.GetHandler = GetHandler;
