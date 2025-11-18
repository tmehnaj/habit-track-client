import React from 'react';
import { RiFocus3Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsGraphDown } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { motion } from "framer-motion";

const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const WhyHabits = () => {
    return (
        <div className='container mx-auto my-15 px-2 md:px-0'>
            <motion.h2
                className='text-center text-neutral my-10'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}>
                Why Build Habits?</motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                <motion.div
                    className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <IoMdCheckmarkCircleOutline className='w-12 h-12 text-secondary' />
                    <div>
                        <h3 className='text-neutral-content'>Better Focus</h3>
                        <p className='text-info-content'>Enhance your concentration with daily habits</p>
                    </div>
                </motion.div>
                <motion.div
                    className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <BsGraphDown className='w-10 h-10 text-secondary' />
                    <div>
                        <h3 className='text-neutral-content'>Reduced Stress</h3>
                        <p className='text-info-content'>Establish routines to ease stress and anxiety</p>
                    </div>
                </motion.div>
                <motion.div
                    className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <BsGraphUpArrow className='w-10 h-10 text-secondary' />
                    <div>
                        <h3 className='text-neutral-content'>Increase Productivity</h3>
                        <p className='text-info-content'>Boost your efficiency through consistent habits</p>
                    </div>
                </motion.div>
                <motion.div
                    className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <RiFocus3Line className='w-12 h-12 text-secondary' />
                    <div>
                        <h3 className='text-neutral-content'>Achieve Goals</h3>
                        <p className='text-info-content'>Big goals are achieved one small step at a time.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyHabits;