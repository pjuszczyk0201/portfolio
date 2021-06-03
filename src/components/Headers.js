import React from 'react';
import decoration from "../assets/decoration.svg";

const Headers = ({title}) => {
    return (
        <div className="headers">
            <h1>{title}</h1>
            <img src={decoration}/>
        </div>
    );
};

export default Headers;