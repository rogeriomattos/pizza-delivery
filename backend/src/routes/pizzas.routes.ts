import { Router } from 'express';
import pizzas from '../mocks/pizzas';
import pizzaSizes from '../mocks/pizzaSizes';
import pizzaDough from '../mocks/pizzaDough';

const pizzasRouter = Router();

pizzasRouter.get('/', (request, response) => {
    
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
});

pizzasRouter.get('/sizes', (request, response) => {
    response.json(pizzaSizes);
});

pizzasRouter.get('/dugh', (request, response) => {
    response.json(pizzaDough);
});

export default pizzasRouter;