import { Router } from 'express';
import PizzasController from '../controllers/PizzasController';
import pizzaSizes from '../mocks/pizzaSizes';
import pizzaDough from '../mocks/pizzaDough';


const pizzasController = new PizzasController();
const pizzasRouter = Router();

pizzasRouter.get('/', pizzasController.list);

pizzasRouter.get('/sizes', (request, response) => {
    response.json(pizzaSizes);
});

pizzasRouter.get('/doughs', (request, response) => {
    response.json(pizzaDough);
});

export default pizzasRouter;