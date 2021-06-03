import React from 'react';
import signature from "../assets/signature.svg"
import Headers from "./Headers";

const HomeAboutUs = () => {

    return (
        <section className="about-us">
            <div className="about">
                <div className="about-title">
                     <Headers title="O nas"/>
                </div>
                <p className="description">Nori grape silver beet broccoli kombu beet greens
                    fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip
                    greens parsnip.</p>
                <div className="signature">
                    <img src={signature}/>
                </div>
            </div>
            <div className="image"/>
        </section>
    );
};

export default HomeAboutUs;