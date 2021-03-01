import { Request, Response } from 'express';
import pizzaDough from '../mocks/pizzaDough';

class DoughsController {
    list(request: Request, response: Response){
        try {
            response.json(pizzaDough);
        } catch (error) {
            response.status(500).json(error);   
        }
    }
}

export default DoughsController;