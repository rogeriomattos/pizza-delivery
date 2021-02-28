import React from 'react';
import './styles.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Recommendation from '../../components/Recommendation';

const Home = () => {
    return ( 
        <div id="page-home">
            <Recommendation
                title={'Recomendação do dia'}
                description={'Pizza de Muçarela'}
                buttonText={'Pedir'}
                buttonLinkTo={'/Address'}
            /> 
            <Recommendation
                title={'Monte a pizza do seu jeito'}
                description={'Varios Sabores exclusivos para você'}
                buttonText={'Ver Cardápio'}
                buttonLinkTo={'/Sizes'}
            />
        </div>
    );
};

export default Home;