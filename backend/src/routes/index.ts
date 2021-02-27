import express from 'express';
import pizzasRouter from './pizzas.routes';
import promotionsRouter from './promotions.routes';

const routes = express.Router();

routes.use('/pizzas', pizzasRouter);

routes.use('/promotions', promotionsRouter);

export default routes;

