import React from 'react';
import { motion } from "framer-motion";

const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const Reviews = () => {
    return (
        <div className='container mx-auto my-15 px-2 md:px-0'>
            <motion.h2
                className='text-center text-neutral my-10'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}>
                Our Achievements</motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {/* 1st */}
                <motion.div
                    className='p-6 rounded-xl shadow-lg border border-base-200 flex flex-col justify-between'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <p><em>"I’ve tried so many habit tracker apps before, but this one is different. The streaks, progress bars, and simple interface make it easy to stay consistent. I can finally see my progress clearly and feel motivated to stick to my goals."</em></p>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Yancy Tear</div>
                            <div className="text-sm opacity-50">Brazil</div>
                        </div>
                    </div>
                </motion.div>

                {/* 2nd */}
                <motion.div
                    className='p-6 rounded-xl shadow-lg border border-base-200 flex flex-col justify-between'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <p><em>"This app is a game-changer! I love how it tracks my habits and shows my progress over time. It’s helped me stay disciplined and achieve things I couldn’t before. The daily reminders and streaks are amazing!"</em></p>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </motion.div>
                {/* 3rdd */}
                <motion.div
                    className='p-6 rounded-xl shadow-lg border border-base-200 flex flex-col justify-between'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <p><em>"Beautiful design and smooth animations make tracking habits enjoyable rather than a chore. I’ve been using it for weeks, and I can already see improvements in my daily routine and productivity."</em></p>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Brice Swyre</div>
                            <div className="text-sm opacity-50">China</div>
                        </div>
                    </div>
                </motion.div>
                {/* 4th */}
                <motion.div
                    className='p-6 rounded-xl shadow-lg border border-base-200 flex flex-col justify-between'
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}>

                    <p><em>"The app is very beginner-friendly yet powerful. It helps me focus on small daily actions that lead to big changes. I feel more productive, motivated, and in control of my life."</em></p>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Marjy Ferencz</div>
                            <div className="text-sm opacity-50">Russia</div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Reviews;