import { Router } from 'express';
import recommendations from '../mocks/recommendations';
const recommendationRouter = Router();

recommendationRouter.get('/today', (request, response) => {

    const today = new Date();
    
    const dailyPromotion = recommendations.filter(({day}) => (day == today.getDay()));

    if(dailyPromotion.length > 0)
        response.json(dailyPromotion[0]);
    else
        response.json(undefined);
});

export default recommendationRouter;