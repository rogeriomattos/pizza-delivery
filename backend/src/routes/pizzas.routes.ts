import { Router } from 'express';
import pizzas from '../mocks/pizzas';
import pizzaSizes from '../mocks/pizzaSizes';

const pizzasRouter = Router();

pizzasRouter.get('/', (request, response) => {
    response.json(pizzas);
});

pizzasRouter.get('/sizes', (request, response) => {
    response.json(pizzaSizes);
});

export default pizzasRouter;