"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hero_1 = require("../objects/hero");
var router = express_1.Router();
var HEROES = [
    new hero_1.Hero(11, 'Mr. Nice'),
    new hero_1.Hero(12, 'Narco'),
    new hero_1.Hero(13, 'Bombasto'),
    new hero_1.Hero(14, 'Celeritas'),
    new hero_1.Hero(15, 'Magneta'),
    new hero_1.Hero(16, 'RubberMan'),
    new hero_1.Hero(17, 'Dynama'),
    new hero_1.Hero(18, 'Dr IQ'),
    new hero_1.Hero(19, 'Magma'),
    new hero_1.Hero(20, 'Tornado')
];
router.get("/", function (req, res) {
    res.send(HEROES);
});
router.get("/:id", function (req, res) {
    var id = +req.params.id;
    console.log(id);
    res.send(HEROES.find(function (hero) { return hero.getId() === id; }));
});
exports.HeroesController = router;
