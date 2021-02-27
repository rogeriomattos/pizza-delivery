import Pizza from "./Pizza";
import DaysOfTheWeek from '../enums/DaysOfTheWeek';

class Promotion {
    id: number;
    price: number;
    day: DaysOfTheWeek;
    pizza: Pizza;

    constructor({id, price, day, pizza}: Promotion){
        this.id = id;
        this.price = price;
        this.day = day;
        this.pizza = pizza;
    }
}

export default Promotion;