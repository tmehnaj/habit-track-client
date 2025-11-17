import React from 'react';
import Newsletter from '../Components/Newsletter/Newsletter';
import LatestHabits from './LatestHabits';
import Carousel from '../Components/Carousel/Carousel';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <LatestHabits></LatestHabits>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;