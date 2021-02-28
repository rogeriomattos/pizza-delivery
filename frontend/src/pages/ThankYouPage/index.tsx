import React from 'react';
import IOrder from '../../entites/IOrder';
import './styles.css';
import { FiCheck } from 'react-icons/fi';
import img_star from '../../assets/man_giving_5_stars-.svg';

interface ThankYouPageProps {
    location: {
        state: {
            id: number;
            points?: number;
        }
    };
}

const ThankYouPage:React.FC<ThankYouPageProps> = (props) => {
    console.log(props);
    return (
        <div id="page-thank-you">
            <div className="message">
                <div className="icon"><FiCheck/></div>
                <div className="text">
                    <h2>
                        Pedido finalizado
                    </h2>
                    <p>Em 1h o pedido chegará ao seu endereço</p>
                </div>
            </div>
            {props.location.state.points &&
            <div className="pointsMessage">
                <img src={img_star}/>
                <h1>
                    Parabéns você recebeu {props.location.state.points} pontos por pedir a recomendação do dia.
                    <br/>Junte 50 pontos e troque por uma pizza grátis
                </h1>
            </div>
            }   
        </div>
    );
};

export default ThankYouPage;
