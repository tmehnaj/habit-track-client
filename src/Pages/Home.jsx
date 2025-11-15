import React from 'react';
import Newsletter from '../Components/Newsletter/Newsletter';
import LatestHabits from './LatestHabits';

const Home = () => {
    return (
        <div>
            <LatestHabits></LatestHabits>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;