import express from 'express';
import pizzasRouter from './pizzas.routes';
import promotionsRouter from './promotions.routes';
import OrdersRouter from './orders.routes';

const routes = express.Router();

routes.use('/pizzas', pizzasRouter);

routes.use('/promotions', promotionsRouter);

routes.use('/orders', OrdersRouter);

export default routes;

