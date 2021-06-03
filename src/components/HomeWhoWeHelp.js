import React, {useState, useEffect} from 'react';
import Headers from "./Headers";

const HomeWhoWeHelp = () => {

    return (
        <section className="help">
            <div className="header-help">
                <Headers title="Komu pomagamy?"/>
                <div className="button-help">
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                </div>
            </div>
            <div className="help-details">
                <h2>W naszej bazie znajdziesz listę zweryfikowanych
                    Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</h2>
            </div>

        </section>
    );
};

export default HomeWhoWeHelp;