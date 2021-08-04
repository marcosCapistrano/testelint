"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sum = require("./oi/sum");
var app = express_1.default();
app.listen(3000, function () {
    console.log("Server started on 3000");
    console.log(sum(2, 3));
});
