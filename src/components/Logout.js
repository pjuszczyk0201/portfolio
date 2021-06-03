import React from 'react';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import Headers from "./Headers";

const Logout = () => {
    return (
        <section className="logout-section">
            <div className="login-menu">
                <Menu/>
            </div>
            <div className="logout-form">
                <Headers title="Wylogowanie nastąpiło pomyślnie!"/>
                <button className="logout_button"><Link to="/">Strona główna</Link></button>
            </div>
        </section>
    );
};

export default Logout;