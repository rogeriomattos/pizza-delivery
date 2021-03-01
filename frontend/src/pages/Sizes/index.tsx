import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '../../components/Radio';
import IOrder from '../../entites/IOrder';
import ISize from '../../entites/ISize';
import api from '../../services/api';
import './styles.css';
import { FiArrowRight } from 'react-icons/fi';
import StepActions from '../../components/StepActions';


interface SizesProps {
    location: {
        state: {
            order: IOrder;
        }
    };
}

const Sizes:React.FC<SizesProps> = (props) => {
    const [pizzaSizes, setPizzaSizes] = useState<ISize[]>([]);
    const [order, setOrder] = useState<IOrder>(
    (props.location && props.location.state && props.location.state.order)?
        props.location.state.order
    :
    {
        size: undefined
    });

    useEffect(() => {
        api.get('/pizzas/sizes').then((res) => {
            setPizzaSizes(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Escolha o tamanho</h2>
            {pizzaSizes.map((item) => (
                <Radio
                    key={item.id}
                    name={'sizes'}
                    title={item.name}
                    checked={(order && order.size && order.size.id  == item.id)}
                    description={item.description}
                    data={item}
                    onClick={(data) => {
                        setOrder({...order, size: data});
                    }}
                />
            ))}

            <StepActions 
                backLink={'/'}
                nextLink={'/Doughs'}
                nextText={'Escolher Massa'}
                order={order}
                disableNext={order && order.size == undefined}
            />
        </div>
    );  
};

export default Sizes;