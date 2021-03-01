import { Request, Response } from 'express';
import pizzaSizes from '../mocks/pizzaSizes';

class SizesController {
    list(request: Request, response: Response) {
        try {
            response.json(pizzaSizes);
        } catch (error) {
            response.status(500).json(error);   
        }
    }
}

export default SizesController;