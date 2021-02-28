import { Router } from 'express';

const OrdersRouter = Router();

OrdersRouter.post('/', (request, response) => {
    const { body } = request;

    if(body.recommendation){
        response.status(201).json({
                id: 1,
                message: "Parabéns você recebeu 10 pontos por pedir a recomendação, junte 50 troque por uma pizza grátis"
            }
        );
    }else{
        response.status(201).json({id: 1});
    }

});


export default OrdersRouter;