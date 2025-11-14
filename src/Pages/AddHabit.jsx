import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddHabit = () => {
    const { user } = useAuth();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    console.log("user",user)
    const handleAddHabit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const reminder = e.target.reminder.value;
        const image = e.target.image.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log({title,description,category,reminder,image,name,email})
        
        const newHabit = {
            title,
            description,
            category,
            reminder,
            image,
            name,
            email,
            createdAt: new Date(),
        }
console.log("new habit",newHabit);

        axiosSecure.post("/habits",newHabit)
        .then(data=>{
            console.log(data);
            if(data.data.insertedId){
                toast.success('habit added successfully')
            }
        })

        e.target.reset();

    }

    return (
        <div className="container mx-auto my-20 flex items-center justify-center  relative overflow-hidden">
            <title>Add Habit</title>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-info-content">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">Boost yourself with a new Habit!</h1>
                </div>
                <div className="w-full max-w-lg backdrop-blur-lg bg-base-300 border border-white/20 shadow-2xl rounded-2xl px-6 lg:px-12 py-6 lg:py-8">
                    <h2 className="text-neutral-content mb-2 text-center drop-shadow-sm py-2">Add Habit Now!</h2>

                    <form onSubmit={handleAddHabit} className="space-y-4">
                        {/* Habit Title field */}
                        <div>
                            <label className="block text-sm mb-1">Habit Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Habit Title"
                                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
                            />
                        </div>
                        {/* category select*/}
                         <div>
                            <label className="block text-sm mb-1">Description</label>
                           <textarea 
                           name="description"
                            id="" 
                            cols="30"
                             rows="10"
                             placeholder='Write Your Description Here......'
                             className="input input-bordered w-full h-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg py-2"></textarea>
                        </div>
                   {/* category */}
                           <div>
                             <label className="block text-sm mb-1">Choose a Category</label>
                           <select 
                           name="category"
                            id=""
                            className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg">
                            <option value="">Choose a Category</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                            <option value="Walk">Walk</option>
                            <option value="Study">Study</option>
                            <option value="Work">Work</option>
                            <option value="Sleep">Sleep</option>
                           </select>
                           </div>
                           <div className='flex gap-2 items-center '>
                            {/* reminder */}
                           
                             <label className="block text-sm mb-1">Reminder</label>
                             <input type="time" name="reminder" id="" />
                           </div>
                           {/* image */}
                            <div>
                            <label className="block text-sm mb-1">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Photo URL"
                                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
                            />
                        </div>
                           
                      
                        {/* name field */}
                        <div>
                            <label className="block text-sm mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={user?.displayName}
                                readOnly
                                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
                            />
                        </div>
                        {/* email field */}
                        <div>
                            <label className="block text-sm mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                value={user?.email}
                                readOnly
                                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
                            />
                        </div>



                        <button type='submit' className="general-btn min-w-full mt-3">Add Habit</button>
                        {/* error */}
                        {/* {
                            error ? <p className='text-red-700 font-semibold'>{error}</p> : ''
                        } */}

                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddHabit;