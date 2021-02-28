import React from 'react';
import IOrder from '../../entites/IOrder';
import './styles.css';

interface ThankYouPageProps {
    location: {
        state: {
            order: IOrder;
        }
    };
}

const ThankYouPage:React.FC<ThankYouPageProps> = (props) => {
    return (
        <div>
            ThankYouPage
        </div>
    );
};

export default ThankYouPage;
