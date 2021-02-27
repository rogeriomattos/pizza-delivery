import { Router } from 'express';
import pizzas from '../mocks/pizzas';
const pizzasRouter = Router();

pizzasRouter.get('/', (request, response) => {
    response.json(pizzas);
});

export default pizzasRouter;