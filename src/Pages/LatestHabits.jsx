import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Context/Context';
import HabitCard from '../Components/Card/HabitCard';
import { motion } from "framer-motion";

const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};


const LatestHabits = () => {
    const { setLoading } = useContext(AuthContext);
    const axios = useAxios();
    const [latestHabits, setLatestHabits] = useState([]);

    useEffect(() => {
        axios.get('/latestHabits')
            .then(data => {
                // console.log(data.data);
                setLatestHabits(data.data);
            })
        setLoading(false);
    }, [axios, setLoading])
    return (
        <div>
            <div className='container mx-auto px-2 my-15'>
                <motion.h2
                    className='text-neutral text-center my-10'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    Latest Habits</motion.h2>
            </div >
            <motion.div
                className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5 md:gap-y-8 lg:gap-y-10 pb-10'
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}>
                {latestHabits.map(habit => <HabitCard key={habit._id} habit={habit}></HabitCard>)}
            </motion.div>
        </div>
    );
};

export default LatestHabits;