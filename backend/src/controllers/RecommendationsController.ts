import { Request, Response } from 'express';
import recommendations from '../mocks/recommendations';

class RecommendationsController {
    findByDay(request: Request, response: Response) {
        try {
            const today = new Date();
            
            const dailyPromotion = recommendations.filter(({day}) => (day == today.getDay()));
        
            if(dailyPromotion.length > 0)
                response.json(dailyPromotion[0]);
            else
                response.json(undefined);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default RecommendationsController;