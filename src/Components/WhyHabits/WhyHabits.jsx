import React from 'react';
import { RiFocus3Line } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsGraphDown } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";


const WhyHabits = () => {
    return (
        <div className='container mx-auto my-15 px-2 md:px-0'>
            <h2 className='text-center text-neutral my-10'>Why Build Habits?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'>
                    <IoMdCheckmarkCircleOutline className='w-12 h-12 text-secondary'/>
                    <div>
                        <h3 className='text-neutral-content'>Better Focus</h3>
                        <p>Enhance your concentration with daily habits</p>
                    </div>
                </div>
                  <div className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'>
                    <BsGraphDown className='w-10 h-10 text-secondary'/>
                    <div>
                        <h3 className='text-neutral-content'>Reduced Stress</h3>
                        <p>Establish routines to ease stress and anxiety</p>
                    </div>
                </div>
                  <div className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'>
                    <BsGraphUpArrow className='w-10 h-10 text-secondary'/>
                    <div>
                        <h3 className='text-neutral-content'>Increase Productivity</h3>
                        <p>Boost your efficiency through consistent habits</p>
                    </div>
                </div>
                  <div className='bg-base-200 p-6 rounded-xl shadow-sm flex gap-3'>
                    <RiFocus3Line className='w-12 h-12 text-secondary'/>
                    <div>
                        <h3 className='text-neutral-content'>Achieve Goals</h3>
                        <p>Big goals are achieved one small step at a time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyHabits;