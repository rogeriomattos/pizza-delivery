import React from 'react';
import './styles.css';
import logo from '../../assets/pizza.svg';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo}/> 
                <span>
                    <a href="https://iconscout.com/icons/pizza" target="_blank">Pizza Icon</a> by <a href="https://iconscout.com/contributors/iconscout" target="_blank">Iconscout Freebies</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;