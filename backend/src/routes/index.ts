import express from 'express';
import pizzasRouter from './pizzas.routes';

const routes = express.Router();

routes.use('/pizzas', pizzasRouter);

export default routes;

