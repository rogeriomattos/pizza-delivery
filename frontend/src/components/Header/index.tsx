import React from 'react';
import './styles.css';
import logo from '../../assets/pizza.svg';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const goToHome =() => {
        history.push('/');
    };

    return (
        <header>
            <Link to="/">
                <img onClick={goToHome} src={logo}/>
            </Link>
            <Link to="/">
                <h1>Pizza Delivery</h1>
            </Link>
            
        </header>
    );
};

export default Header; 