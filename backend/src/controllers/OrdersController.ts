import { Request, Response } from 'express';

class OrdersController {
    create(request: Request, response: Response) {
        try {
            const { body } = request;

            if(body.recommendation){
                response.status(201).json({
                        id: 1,
                        points: 5
                    }
                );
            }else{
                response.status(201).json({id: 1});
            }
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default OrdersController;