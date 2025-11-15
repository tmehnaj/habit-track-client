import React, { useContext, useEffect, useRef, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../Context/Context';
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from 'react-toastify';



const MyHabits = () => {
    const { user, setLoading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [modalHabit, setModalHabit] = useState({});
    const [myHabits, setMyHabits] = useState([]);
    const modalRef = useRef();
    

    const getMyHabits = ()=>{
        axiosSecure.get(`/myHabits?email=${user?.email}`)
            .then(data => {
                // console.log(data);
                setMyHabits(data.data);
            })
    }
    useEffect(() => {
        getMyHabits();
        setLoading(false);
    }, [user])


    const handleSetModalHabit = (habit) => {
        setModalHabit(habit);
        
    }

    useEffect(()=>{
        if(modalHabit?._id){
         modalRef.current.showModal()
        }
    },[modalHabit?._id])


    const handleUpdateHabit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const reminder = e.target.reminder.value;
        const image = e.target.image.value;
        // console.log({ title, description, category, reminder, image })
        const newHabit = {
            title,
            description,
            category,
            reminder,
            image,
            
        }
        axiosSecure.put(`/habits/${modalHabit?._id}`, newHabit)
            .then(data => {
                console.log(data);
                modalRef.current.close();
                toast.success('habit added successfully');
                getMyHabits();
                setModalHabit({});
            })
    }

    return (
        <div className="my-20 container mx-auto">
            <title>My Habits</title>

            <div className="overflow-x-auto">
                <h3 className=' mt-10 mb-8 text-center text-accent-content'>My Bids: <span>{myHabits.length}</span></h3>
                <table className="table mb-10 text-neutral font-semibold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Current Streak</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myHabits.map((habit, index) => <tr key={habit._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {habit.title}
                                </td>
                                <td>
                                    {habit.category}
                                </td>

                                <td>
                                    <div className="badge badge-warning">streak</div>
                                </td>
                                <td>
                                    {habit.createdAt}
                                </td>
                                <td>
                                    <div className="flex items-center gap-1 text-success font-bold ">
                                        <input type="checkbox" className="checkbox rounded-full border-3 checkbox-success h-5 w-5" />Complete
                                    </div>
                                    {/* <div className="flex items-center gap-1 text-neutral-content  ">
                                        <input type="checkbox" className="checkbox rounded-full border-3 checkbox-warning h-5 w-5" />Pending
                                    </div> */}
                                </td>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => { handleSetModalHabit(habit) }} className='px-1 py-1 hover:cursor-pointer'><MdEditSquare className="h-5 w-5 text-primary " /></button>
                                        <button className='px-1 py-1'><RiDeleteBin6Fill className="h-5 w-5 text-error hover:cursor-pointer" /></button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
            {/* modal for update habit */}
            <dialog ref={modalRef} key={modalHabit?._id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-neutral-content">Update Your Habit</h3>
                    <form onSubmit={handleUpdateHabit} className="space-y-4">
                        {/* Habit Title field */}
                        <div>
                            <label className="block text-sm mb-1">Habit Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Habit Title"
                                defaultValue={modalHabit?.title}
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
                                defaultValue={modalHabit?.description}
                                className="input input-bordered w-full h-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg py-2"></textarea>
                        </div>
                        {/* category */}
                        <div>
                            <label className="block text-sm mb-1">Choose a Category</label>
                            <select
                                name="category"
                                id=""
                                defaultValue={modalHabit?.category || ''}
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
                            <input type="time" name="reminder" id="" defaultValue={modalHabit?.reminder} />
                        </div>
                        {/* image */}
                        <div>
                            <label className="block text-sm mb-1">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Photo URL"
                                defaultValue={modalHabit?.image}
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



                        <button type='submit' className="general-btn min-w-full mt-3">Update Habit</button>
                        {/* error */}
                        {/* {
                            error ? <p className='text-red-700 font-semibold'>{error}</p> : ''
                        } */}

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default MyHabits;