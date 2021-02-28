import { Router } from 'express';

const OrdersRouter = Router();

OrdersRouter.post('/', (request, response) => {
    const { body } = request;

    if(body.recommendation){
        response.status(201).json({
                id: 1,
                points: 10
            }
        );
    }else{
        response.status(201).json({id: 1});
    }

});


export default OrdersRouter;