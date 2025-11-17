import React from 'react';
import Newsletter from '../Components/Newsletter/Newsletter';
import LatestHabits from './LatestHabits';
import Carousel from '../Components/Carousel/Carousel';
import WhyHabits from '../Components/WhyHabits/WhyHabits';
import Reviews from '../Components/Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <WhyHabits></WhyHabits>
            <LatestHabits></LatestHabits>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;