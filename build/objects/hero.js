"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = /** @class */ (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    Hero.prototype.getId = function () {
        return this.id;
    };
    Hero.prototype.setId = function (id) {
        this.id = id;
    };
    Hero.prototype.getName = function () {
        return this.name;
    };
    Hero.prototype.setName = function (name) {
        this.name = name;
    };
    return Hero;
}());
exports.Hero = Hero;
