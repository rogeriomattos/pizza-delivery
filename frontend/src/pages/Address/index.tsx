import React, { useState } from 'react';
import StepActions from '../../components/StepActions';
import IOrder from '../../entites/IOrder';
import './styles.css';

interface AddressProps {
    location: {
        state: {
            order: IOrder;
        }
    };
}

const Address: React.FC<AddressProps> = (props) => {
    const [order, setOrder] = useState<IOrder>(props.location.state.order);

    const disableNext = ():boolean => {
        console.log(order);
        if(order && order.address)
        {
            const { address } = order;
            if(address.city  && address.UF && address.CEP &&  address.address)
                return false;
        }

        return  true;
    };

    return (
        <div id="page-address">
            <h2>Preencha o endereço de entrega:</h2>
            <label>Cidade</label>
            <input 
                type="text" 
                onChange={(ev)=>{
                    const { value } = ev.target;
                    setOrder({...order, 
                                address:{...order.address, city: value}
                            });
                }}
            />
            <label>UF</label>
            <input 
                type="text"
                onChange={(ev)=>{
                    const { value } = ev.target;
                    setOrder({...order, 
                                address:{...order.address, UF: value}
                            });
                }}
            />
            <label>CEP</label>
            <input 
                type="text"
                onChange={(ev)=>{
                    const { value } = ev.target;
                    setOrder({...order, 
                                address:{...order.address, CEP: value}
                            });
                }}
            />
            <label>Endereço</label>
            <input type="text"
                onChange={(ev)=>{
                    const { value } = ev.target;
                    setOrder({...order, 
                                address:{...order.address, address: value}
                            });
                }}
            />
            <StepActions
                backLink={'/Flavors'}
                disableNext={disableNext()}
                nextLink={'/ConfirmOrder'}
                nextText={'Próximo'}
                order={order}
            />
        </div>
    );  
};

export default Address;