import React from 'react';
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHeader from "./HomeHeader";
import HomeContact from "./HomeContact";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </>
    );
};

export default Home;