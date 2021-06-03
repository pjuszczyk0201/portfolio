import React from 'react';
import icon from "../assets/icon.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import Headers from "./Headers";
import Buttons from "./Buttons";

const HomeSimpleSteps = () => {
    return (
        <section className="simple-steps">
            <Headers title="Wystarczą 4 proste kroki"/>
            <div className="steps">
                <div className="step">
                   <img src={icon}/>
                   <h4>Wybierz rzeczy</h4>
                   <p className="details">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <img src={icon1}/>
                    <h4>Spakuj je</h4>
                    <p className="details">skorzystaj z worków na śmieci</p>
                </div>
                <div className="step">
                    <img src={icon2}/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <p className="details">wybierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <img src={icon3}/>
                    <h4>Zamów kuriera</h4>
                    <p className="details">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Buttons buttonName="ODDAJ RZECZY"/>
        </section>
    );
};

export default HomeSimpleSteps;