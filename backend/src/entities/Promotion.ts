import Pizza from "./Pizza";
import DaysOfTheWeek from '../enums/DaysOfTheWeek';

class Promotion {
    id: number;
    discount: number;
    day: DaysOfTheWeek;
    pizza: Pizza;

    constructor({id, discount, day, pizza}: Promotion){
        this.id = id;
        this.discount = discount;
        this.day = day;
        this.pizza = pizza;
    }
}

export default Promotion;