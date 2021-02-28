class PizzaSize {
    id: number;
    name: string;
    description: string;
    percentageOfPrice: number;

    constructor({ id, name, description, percentageOfPrice }: PizzaSize) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.percentageOfPrice = percentageOfPrice;
    }
}

export default PizzaSize;