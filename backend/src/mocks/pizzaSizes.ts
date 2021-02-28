import PizzaSize from "../entities/PizzaSize";

const pizzaSizes = [
    new PizzaSize({id: 1, name: 'Brotinho', description: '4 pedaços', percentageOfPrice: 50 }),
    new PizzaSize({id: 2, name: 'Média', description: '8 pedaços', percentageOfPrice: 100 }),
    new PizzaSize({id: 3, name: 'Grande', description: '12 pedaços', percentageOfPrice: 125 }),
    new PizzaSize({id: 4, name: 'Gigante', description: '16 pedaços', percentageOfPrice: 150 }),
];

export default pizzaSizes;