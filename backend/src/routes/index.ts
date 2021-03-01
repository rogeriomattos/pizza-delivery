import express from 'express';
import pizzasRouter from './pizzas.routes';
import recommendationRouter from './recommendations.routes';
import OrdersRouter from './orders.routes';
import SizesRouter from './sizes.routes';
import DoughRouter from './doughs.routes';

const routes = express.Router();

routes.use('/pizzas', pizzasRouter);
routes.use('/pizzas/sizes', SizesRouter);
routes.use('/pizzas/doughs', DoughRouter);


routes.use('/recommendation', recommendationRouter);

routes.use('/orders', OrdersRouter);

export default routes;

