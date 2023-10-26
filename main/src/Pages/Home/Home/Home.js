import React from 'react';
import SectionTwo from '../SectionTwo/SectionTwo';
import Banner from '../Banner/Banner';
import Sectionone from './SectopnOne/Sectionone';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sectionone></Sectionone>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;