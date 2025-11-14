import React from 'react';

const About = () => {
    return (
        <div className="flex items-center justify-center my-10 md:my-15 ">
          <title>About Us</title>
  <div class=" shadow-xl rounded-2xl text-center p-5 md:p-10 container mx-auto backdrop-blur-lg">
    <h1 className='drop-shadow-lg pb-5 '>About Us</h1>
    <div className='text-base text-accent-content pb-6'>
        <p>
      Welcome to your personal companion for building better habits every day.  
      Our mission is simple: to help you stay consistent, motivated, and mindful of your growth.
    </p>

    <p>
      Whether you're tracking workouts, learning goals, or daily routines, Habituate makes it easy to visualize progress and celebrate small wins that lead to lasting change.
    </p>

    <p>
      Built with love and simplicity, we believe that small steps — taken daily — can transform your life. 🌿
    </p>
    </div>

    <div className="border-3 border-primary rounded-lg p-6 bg-base-200 text-neutral-content space-y-1">
      <h2 className='pb-1'>Contact Information</h2>

      <p ><strong>Address:</strong> 123, Dhaka, Bangladesh</p>
      <p ><strong>Email:</strong> <a href="" className=" hover:underline">habit_track@gmail.com</a></p>
      <p><strong>Phone:</strong> +8801700000000</p>
    </div>
  </div>
</div>

    );
};

export default About;