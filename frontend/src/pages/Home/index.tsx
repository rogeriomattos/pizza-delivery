import React, {useEffect, useState} from 'react';
import './styles.css';
import Making_pizza from '../../assets/Making_pizza.jpg';

import Recommendation from '../../components/Recommendation';
import api from '../../services/api';
import IRecommendation from '../../entites/IRecommendation';


const Home = () => {
    const [dailyRecommendation, setDailyRecommendation] = useState<IRecommendation>({
        discount:0, 
        dough: {id:0, name:''},
        size: {id:0, name:'', description: ''},
        pizza: {id:0, ingredients: '', name: '', price: 0},
    });

    useEffect(()=>{
        api.get('/recommendation/today')
        .then((res) => {
            setDailyRecommendation(res.data);
        });
    }, []);

    return ( 
        <div id="page-home">
            {dailyRecommendation != undefined &&
            <Recommendation
                title={'Recomendação do dia ' + dailyRecommendation.discount+'% off'}
                description={   dailyRecommendation.pizza.name + ', ' + 
                                dailyRecommendation.size.name  + ' e ' +
                                dailyRecommendation.dough.name
                            }
                buttonText={'Pedir'}
                buttonLinkTo={'/Address'}
                data={{order:{
                    pizza:dailyRecommendation.pizza,
                    size:dailyRecommendation.size,
                    dough: dailyRecommendation.dough,
                    recommendation: dailyRecommendation
                }}}
            /> }
            <Recommendation
                title={'Monte a pizza do seu jeito'}
                description={'Varios Sabores exclusivos para você'}
                buttonText={'Começar a montar'}
                buttonLinkTo={'/Sizes'}
                imgSrc={Making_pizza}
            />
        </div>
    );
};

export default Home;