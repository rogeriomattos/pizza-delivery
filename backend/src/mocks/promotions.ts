import Promotion from "../entities/Promotion";
import DaysOfTheWeek from "../enums/DaysOfTheWeek";
import pizzas from './pizzas';

const promotions = [
    new Promotion({id: 1, day: DaysOfTheWeek.Sunday, pizza: pizzas[0], discount: 25 }),
    new Promotion({id: 1, day: DaysOfTheWeek.Monday, pizza: pizzas[1], discount: 25 }),
    new Promotion({id: 1, day: DaysOfTheWeek.Tuesday, pizza: pizzas[2], discount: 25 }),
    new Promotion({id: 1, day: DaysOfTheWeek.Wednesday, pizza: pizzas[3], discount: 25 }),
    new Promotion({id: 1, day: DaysOfTheWeek.Thursday, pizza: pizzas[4], discount: 25 }),
    new Promotion({id: 1, day: DaysOfTheWeek.Friday, pizza: pizzas[0], discount: 25 }),
    new Promotion({id: 1, day: DaysOfTheWeek.Saturday, pizza: pizzas[1], discount: 25 }),
];

export default promotions;