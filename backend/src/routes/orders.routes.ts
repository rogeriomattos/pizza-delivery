import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const ordersController = new OrdersController();
const OrdersRouter = Router();

OrdersRouter.post('/', ordersController.create);


export default OrdersRouter;