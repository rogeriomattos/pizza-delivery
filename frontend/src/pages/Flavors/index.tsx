import React, { useEffect, useState } from 'react';
import Radio from '../../components/Radio';
import StepActions from '../../components/StepActions';
import IOrder from '../../entites/IOrder';
import IPizza from '../../entites/IPizza';
import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';
import './styles.css';

interface FlavorsProps {
    location: {
        state: {
            order: IOrder;
        }
    };
}

const Flavors:React.FC<FlavorsProps> = (props) => {
    const [pizzaFlavors, setPizzaFlavors] = useState<IPizza[]>([]);
    const [order, setOrder] = useState<IOrder>(props.location.state.order);

    useEffect(() => {
        api.get("/pizzas/?size="+order.size?.id)
        .then((res)=>{
            console.log(res.data);
            setPizzaFlavors(res.data);
        });
    }, [])

    return (
        <div>
            <h2>Selecione o sabor:</h2>

            {pizzaFlavors.map((item) => (
                <Radio
                    key={item.id}
                    title={item.name}
                    description={formatPrice(item.price)+' | '+item.ingredients}
                    onClick={(data)=>{
                        setOrder({...order, pizza: data});
                    }}
                    name={'doughs'}
                    data={item}
                />
            ))}

            <StepActions
                backLink={'/Doughs'}
                disableNext={order && order.pizza == undefined}
                nextLink={'/Address'}
                nextText={'Preencha o endereço'}
                order={order}
            />
        </div>
    );  
};

export default Flavors;