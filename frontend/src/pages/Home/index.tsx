import React, {useEffect, useState} from 'react';
import './styles.css';
import formatPrice from '../../utils/formatPrice';

import Recommendation from '../../components/Recommendation';
import api from '../../services/api';

const Home = () => {
    const [dailyRecommendation, setDailyRecommendation] = useState({
        discount: 0,
        pizza:{name: "", price: 0}
    });

    useEffect(()=>{
        api.get('/promotions/today')
        .then((res) => {
            setDailyRecommendation(res.data);
        });
    }, []);

    return ( 
        <div id="page-home">
            {dailyRecommendation != undefined &&
            <Recommendation
                title={'Recomendação do dia ' + dailyRecommendation.discount+'% off'}
                description={dailyRecommendation.pizza.name}
                buttonText={'Pedir'}
                buttonLinkTo={'/Address'}
            /> }
            <Recommendation
                title={'Monte a pizza do seu jeito'}
                description={'Varios Sabores exclusivos para você'}
                buttonText={'Começar a montar'}
                buttonLinkTo={'/Sizes'}
            />
        </div>
    );
};

export default Home;