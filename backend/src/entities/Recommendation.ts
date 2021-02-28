import Pizza from "./Pizza";
import DaysOfTheWeek from '../enums/DaysOfTheWeek';
import PizzaDough from "./PizzaDough";
import PizzaSize from "./PizzaSize";

class Recommendation {
    id: number;
    discount: number;
    day: DaysOfTheWeek;
    pizza: Pizza;
    dough: PizzaDough;
    size: PizzaSize;

    constructor({id, discount, day, pizza, dough, size}: Recommendation){
        this.id = id;
        this.discount = discount;
        this.day = day;
        this.pizza = pizza;
        this.dough = dough;
        this.size = size;
    }
}

export default Recommendation;