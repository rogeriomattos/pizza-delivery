import { Request, Response } from 'express';
import pizzas from '../mocks/pizzas';
import pizzaSizes from '../mocks/pizzaSizes';

class PizzasController {
    list(request: Request, response: Response){
        try {
            const { query } = request;
            if(query != undefined && query.size != undefined){
                const { size } = query;
                if(typeof size == 'string') {
                    const pizzaSize = pizzaSizes.filter(({id}) => (id == parseInt(size)));
                    
                    if(pizzaSize.length > 0)
                        response.json(pizzas.map((item)=>{
                            return {...item, price: item.price * (pizzaSize[0].percentageOfPrice/100)};
                        }));
                }
            }
            else
                response.json(pizzas);
        } catch (error) {
            response.status(500).json(error);
        }
    }
}

export default PizzasController;