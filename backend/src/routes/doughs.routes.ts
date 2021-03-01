import { Router } from 'express';

import DoughsController from '../controllers/DoughsController';

const doughsController = new DoughsController();
const DoughRouter = Router();

DoughRouter.get('/', doughsController.list);

export default DoughRouter;
