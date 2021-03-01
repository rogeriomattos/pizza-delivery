import { Router } from 'express';
import RecommendationsController from '../controllers/RecommendationsController';

const recommendationsController = new RecommendationsController();
const recommendationRouter = Router();

recommendationRouter.get('/today', recommendationsController.findByDay);

export default recommendationRouter;