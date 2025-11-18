import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Context/Context';
// import useAxios from '../hooks/useAxios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};


const Details = () => {
    const { setLoading, user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const [habit, setHabit] = useState({});
    const [progress, setProgress] = useState(0);
    // console.log(id);

const getHabitDetails = () => {  
    axiosSecure.get(`/habits/${id}`)
        .then(data => {
            setHabit(data.data);
            setProgress(calculateProgress(data.data.completionHistory));
        })
        .finally(() => {
            setLoading(false);
        });
};

    useEffect(() => {
       getHabitDetails();
    }, [axiosSecure, id])

    const calculateProgress = (history) => {
        if (!history || history.length === 0) {
            return 0;
        }
        const today = new Date();
        const oldDate = new Date();
        oldDate.setDate(today.getDate() - 30);

        let countDate = 0;

        history.forEach(date => {
            const completeDate = new Date(date);
            if (completeDate <= today && completeDate >= oldDate) {
                countDate++;
            }
        })

        const percentage = Math.round((countDate / 30) * 100);

        return percentage;
    }


    const handleComplete = (id) => {
        axiosSecure.patch(`/habits/complete/${id}`)
            .then(data => {
                // console.log(data);
                if (data) {
                    getHabitDetails();
                    toast.success('you have completed for today');
                    // getMyHabits();
                }
            })
    }

    const isCompleteForToday = (habit) => {
        const today = new Date().toDateString();
        return (habit?.completionHistory ?? []).some(date => new Date(date).toDateString() === today);
    }

    return (
        <div className='container mx-auto my-20 '>
            <title>{habit.title}</title>
            <div className='px-2 flex flex-col lg:flex-row gap-5 md:gap-8 items-start justify-between '>
                <motion.figure
                    className='w-full'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <img src={habit?.image} alt="" className='xs:max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto rounded-2xl' />
                </motion.figure>
                <motion.div
                    className='space-y-5 w-full'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <div className='flex gap-1 items-center'>
                        <h1 className='text-neutral pb-7'>{habit?.title}</h1>
                        <div className="badge badge-warning text-neutral-content font-bold px-8 py-3">{habit?.currentStreak || 0}</div>
                    </div>
                    <div>
                        <p className='text-justify'><strong className='text-neutral'>Description:</strong> {habit?.description}</p>
                        <p className='pt-2'><strong>Category:</strong> {habit?.category}</p>
                    </div>
                    <div>
                        <h4 className='text-neutral font-bold'>Progress for Last 30 Days</h4>
                        <progress className="progress progress-secondary w-56" value={progress} max="100"></progress>
                        <span className='font-bold text-neutral'>  {progress}%</span>
                    </div>
                    <div>
                        <h4 className='text-neutral font-bold'>Created by:</h4>
                        <p>Name:{user?.displayName}</p>
                        <p>Contact:{user?.email}</p>
                    </div>
                    <button id={`complete-${habit?._id}`}
                        onClick={() => { handleComplete(habit?._id) }}
                        disabled={isCompleteForToday(habit)}
                        className='general-btn2'>Mark Complete</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Details;