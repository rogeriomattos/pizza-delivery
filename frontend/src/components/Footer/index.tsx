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
                    <br/>
                    <a href="https://iconscout.com/illustrations/man" target="_blank">Man giving 5 stars rating Illustration</a> by <a href="https://iconscout.com/contributors/Aleshaku">Ilusiku Studio</a> on <a href="https://iconscout.com">Iconscout</a>
                    <br/>
                    <a href="https://br.freepik.com/fotos/alimento">Alimento foto criado por freepik - br.freepik.com</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;