import Recommendation from "../entities/Recommendation";
import DaysOfTheWeek from "../enums/DaysOfTheWeek";
import pizzas from './pizzas';
import doughs from './pizzaDough';
import sizes from './pizzaSizes';

const recommendations = [
    new Recommendation({id: 1, day: DaysOfTheWeek.Sunday, pizza: pizzas[0], dough: doughs[0], size: sizes[0], discount: 25 }),
    new Recommendation({id: 1, day: DaysOfTheWeek.Monday, pizza: pizzas[1], dough: doughs[2], size: sizes[1], discount: 25 }),
    new Recommendation({id: 1, day: DaysOfTheWeek.Tuesday, pizza: pizzas[2], dough: doughs[1], size: sizes[2], discount: 25 }),
    new Recommendation({id: 1, day: DaysOfTheWeek.Wednesday, pizza: pizzas[3], dough: doughs[2], size: sizes[3], discount: 25 }),
    new Recommendation({id: 1, day: DaysOfTheWeek.Thursday, pizza: pizzas[4], dough: doughs[0], size: sizes[0], discount: 25 }),
    new Recommendation({id: 1, day: DaysOfTheWeek.Friday, pizza: pizzas[0], dough: doughs[1], size: sizes[1], discount: 25 }),
    new Recommendation({id: 1, day: DaysOfTheWeek.Saturday, pizza: pizzas[1], dough: doughs[0], size: sizes[2], discount: 25 }),
];

export default recommendations;