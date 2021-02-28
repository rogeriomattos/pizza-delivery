import { Router } from 'express';
import pizzas from '../mocks/pizzas';
import pizzaSizes from '../mocks/pizzaSizes';
import pizzaDough from '../mocks/pizzaDough';

const pizzasRouter = Router();

pizzasRouter.get('/', (request, response) => {
    response.json(pizzas);
});

pizzasRouter.get('/sizes', (request, response) => {
    response.json(pizzaSizes);
});

pizzasRouter.get('/dugh', (request, response) => {
    response.json(pizzaDough);
});

export default pizzasRouter;