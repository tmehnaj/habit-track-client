import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import HabitCard from '../Components/Card/HabitCard';

const PublicHabits = () => {
    const [allHabits,setAllHabits] = useState([]);
    const axios = useAxios();

    useEffect(()=>{
        axios.get('/habits')
        .then(data=>{
            console.log(data.data);
            setAllHabits(data.data);
        })
    },[])
    return (
         <div className='container mx-auto px-2'>
            <title>Everyone's Habits</title>
            <div className='container mx-auto px-2'>
                <h3 className='text-[#9F62F2] text-3xl font-semibold text-center py-12'>Everyone's Habits (<span>{allHabits.length}</span>)</h3>
            </div >
            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5 md:gap-y-8 lg:gap-y-10 pb-10'>
                {allHabits.map(habit=> <HabitCard key={habit._id} habit={habit}></HabitCard>)}
            </div>
        </div>
    );
};

export default PublicHabits;