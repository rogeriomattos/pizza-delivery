import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IOrder from '../../entites/IOrder';
import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';
import './styles.css';

interface ConfirmOrderProps {
    location: {
        state: {
            order: IOrder;
        }
    };
}

const ConfirmOrder:React.FC<ConfirmOrderProps> = (props) => {
    const [order, setOrder] = useState<IOrder>(props.location.state.order);
    const history = useHistory();
    
    const backStep = () => {
        history.push('/Address', { order: order });
    };

    const finishedOrder = () => {
        api.post('/orders', order).then((res) => {
            history.push('/ThankYouPage', res.data);
        });
    };
    
    return (
        <div id="page-confirm-order">
            <div className="address">
                <h3>Entregar em:</h3>
                <p>
                    {order.address?.address}
                </p>
                <p>
                    {order.address?.city}, {order.address?.UF}
                </p>
            </div>
            <div className="pizza">
                <h3>Pedido:</h3>
                <p>{order.pizza?.name}</p>
                <p>{order.size?.name}, {order.dough?.name}</p>
            </div>
            <div className="total">
                <h2>Total: {(order.pizza)?formatPrice(order.pizza.price):''}</h2>
            </div>
            <div className='actions'>
                <button onClick={backStep}>Voltar</button>
                <button onClick={finishedOrder}>Finalizar Pedido</button>
            </div>
        </div>
    );  
};

export default ConfirmOrder;