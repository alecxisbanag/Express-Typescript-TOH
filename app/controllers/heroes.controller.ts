import { Router, Request, Response } from 'express';
import { Hero } from '../objects/Hero';

const router: Router = Router();

const HEROES: Hero[] = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan'),
    new Hero(17, 'Dynama'),
    new Hero(18, 'Dr IQ'),
    new Hero(19, 'Magma'),
    new Hero(20, 'Tornado')
]

router.get("/", (req: Request, res: Response) => {
    res.send(HEROES);
});

router.get("/:id", (req: Request, res: Response) => {
    let id: number = +req.params.id;
    console.log(id);
    res.send(HEROES.find(hero => hero.getId() === id));
});

export const HeroesController: Router = router;