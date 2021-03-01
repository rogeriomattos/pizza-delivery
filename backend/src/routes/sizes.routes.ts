import { Router } from 'express';

import SizesController from '../controllers/SizesController';

const sizesController = new SizesController();
const SizesRouter = Router();

SizesRouter.get('/', sizesController.list);

export default SizesRouter;
