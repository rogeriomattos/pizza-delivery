import { Router } from 'express';
import promotions from '../mocks/promotions';
const promotionsRouter = Router();

promotionsRouter.get('/today', (request, response) => {

    const today = new Date();
    
    const dailyPromotion = promotions.filter(({day}) => (day == today.getDay()));

    if(dailyPromotion.length > 0)
        response.json(dailyPromotion[0]);
    else
        response.json(undefined);
});

export default promotionsRouter;