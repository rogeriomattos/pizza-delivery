import Pizza from "../entities/Pizza";

const pizzas = [
    new Pizza({id: 1, name: 'Muçarela', ingredients: 'Muçarela', price: 35.00 }),
    new Pizza({id: 2, name: 'Quatro queijos', ingredients: 'Catupiry, muçarela, provolone e parmesão', price: 39.00 }),
    new Pizza({id: 3, name: 'Vegetariana', ingredients: 'Minlho, palmito, tomate, ervilha, escarola e cebola', price: 32.00 }),
    new Pizza({id: 4, name: 'Marguerits', ingredients: 'Muçarela, manjericão e tomate', price: 37.00 }),
    new Pizza({id: 5, name: 'Frango com catupiry', ingredients: 'Frango e catupiry', price: 36.00 }),
];

export default pizzas;