class Pizza {
    id: number;
    name: string;
    ingredients: string;
    price: number;
    
    constructor({ id, name, ingredients, price }: Pizza) {
        this.id = id;
        this.ingredients = ingredients;
        this.name = name;
        this.price = price;
    }
};

export default Pizza;