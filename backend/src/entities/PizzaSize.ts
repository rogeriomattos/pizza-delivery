class PizzaSize {
    id: number;
    name: string;
    description: string;

    constructor({ id, name, description }: PizzaSize) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

export default PizzaSize;