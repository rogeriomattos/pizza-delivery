import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Radio from '../../components/Radio';
import IOrder from '../../entites/IOrder';
import ISize from '../../entites/ISize';
import api from '../../services/api';
import './styles.css';
import { FiArrowRight } from 'react-icons/fi';
import StepActions from '../../components/StepActions';


const Sizes = () => {
    const [pizzaSizes, setPizzaSizes] = useState<ISize[]>([]);
    const [order, setOrder] = useState<IOrder>({
        size: undefined
    });

    useEffect(() => {
        api.get('/pizzas/sizes').then((res)=>{
            console.log(res.data); 
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