import express from 'express';
import pizzasRouter from './pizzas.routes';
import recommendationRouter from './recommendations.routes';
import OrdersRouter from './orders.routes';

const routes = express.Router();

routes.use('/pizzas', pizzasRouter);

routes.use('/recommendation', recommendationRouter);

routes.use('/orders', OrdersRouter);

export default routes;

