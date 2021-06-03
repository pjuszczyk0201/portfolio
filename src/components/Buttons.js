import React from 'react';
import {Link} from "react-router-dom";

const Buttons = ({buttonName}) => {
    return (
        <button><Link to="logowanie" className="start-buttons_button">{buttonName}</Link></button>
    );
};

export default Buttons;