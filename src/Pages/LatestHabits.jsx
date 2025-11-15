import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Context/Context';
import HabitCard from '../Components/Card/HabitCard';

const LatestHabits = () => {
    const { setLoading } = useContext(AuthContext);
    const axios = useAxios();
    const [latestHabits,setLatestHabits] = useState([]);

    useEffect(()=>{
        axios.get('/latestHabits')
        .then(data=>{
            // console.log(data.data);
            setLatestHabits(data.data);
        })
        setLoading(false);
    },[axios,setLoading])
    return (
        <div>
           <div className='container mx-auto px-2'>
                <h2 className='text-neutral'>Latest Habits</h2>
            </div >
            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5 md:gap-y-8 lg:gap-y-10 pb-10'>
                {latestHabits.map(habit=> <HabitCard key={habit._id} habit={habit}></HabitCard>)}
            </div>
        </div>
    );
};

export default LatestHabits;