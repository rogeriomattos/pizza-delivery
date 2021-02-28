import React from 'react';
import './styles.css';
import logo from '../../assets/pizza.svg';

const Header = () => {
    return (
        <header>
            <img src={logo}/>
            <h1>Pizza Delivery</h1>
        </header>
    );
};

export default Header; 