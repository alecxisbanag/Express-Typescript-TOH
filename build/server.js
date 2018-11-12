"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var controllers_1 = require("./controllers");
var app = express();
var port = process.env.PORT || 3000;
app.use(cors());
app.use('/welcome', controllers_1.WelcomeController);
app.use('/heroes', controllers_1.HeroesController);
app.listen(port, function () {
    console.log("Listening at http://location:" + port + "/");
});
