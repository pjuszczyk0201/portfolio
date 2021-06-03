import React from 'react';
import Menu from "./Menu";
import Headers from "./Headers";
import Buttons from "./Buttons";

const HomeHeader = () => {
    return (
        <section className="welcome">
            <div className="banner">
            </div>
            <div className="header">
                <Menu/>
                <div className="start-help">
                    <Headers title="Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"/>
                    <div className="start-buttons">
                        <Buttons buttonName="ODDAJ RZECZY"/>
                        <Buttons buttonName="ZORGANIZUJ ZBIÓRKĘ"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;