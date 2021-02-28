import React, { useEffect, useState } from 'react';
import Radio from '../../components/Radio';
import StepActions from '../../components/StepActions';
import IDough from '../../entites/IDoughs';
import IOrder from '../../entites/IOrder';
import api from '../../services/api';
import './styles.css';

interface DoughsProps {
    location: {
        state: {
            order: IOrder;
        }
    };
}

const Doughs:React.FC<DoughsProps> = (props) => {
    
    const [order, setOrder] = useState<IOrder>(props.location.state.order);
    const [doughs, setDoughs] = useState<IDough[]>([]);
    console.log(order);

    useEffect(() => {
        api.get('/pizzas/doughs')
        .then((res) => {
            setDoughs(res.data);
        });
    }, []);

    return (
        <div id="page-doughs">
            <h2>Selecione a massa:</h2>
            {doughs.map((item) => (
                <Radio
                    key={item.id}
                    title={item.name}
                    onClick={(data)=>{
                        setOrder({...order, dough: data});
                    }}
                    name={'doughs'}
                    data={item}
                />
            ))}
            
            <StepActions
                backLink={'/Sizes'}
                disableNext={order && order.dough == undefined}
                nextLink={'/Flavors'}
                nextText={'Escolha o Sabor'}
                order={order}
            />
        </div>
    );  
};

export default Doughs;