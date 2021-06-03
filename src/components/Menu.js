import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

const Menu = () => {
    return (
        <div className="navi">
            <ul className="log">
                <li className="login"><Link to="logowanie" smooth={true}>Zaloguj</Link></li>
                <li className="login"><Link to="rejestracja" smooth={true}>Załóż konto</Link></li>
            </ul>
            <nav>
                <ul>
                    <li className="menu"><ScrollLink activeClass="active" to="header" spy={true} smooth={true}>Start</ScrollLink></li>
                    <li className="menu"><ScrollLink activeClass="active" to="simple-steps" spy={true} smooth={true}>O co chodzi?</ScrollLink></li>
                    <li className="menu"><ScrollLink activeClass="active" to="about" spy={true} smooth={true}>O nas</ScrollLink></li>
                    <li className="menu"><ScrollLink activeClass="active" to="help" spy={true} smooth={true}>Fundacja i organizacje</ScrollLink></li>
                    <li className="menu"><ScrollLink activeClass="active" to="contact" spy={true} smooth={true}>Kontakt</ScrollLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;