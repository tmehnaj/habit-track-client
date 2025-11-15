import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../Context/Context';
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MyHabits = () => {
    const { user, setLoading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [myHabits, setMyHabits] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/myHabits?email=${user?.email}`)
            .then(data => {
                // console.log(data);
                setMyHabits(data.data);
            })
        setLoading(false);
    }, [user, axiosSecure, setLoading])

    return (
        <div>
            <title>My Habits</title>

            <div className="overflow-x-auto">
                <h3 className=' mt-10 mb-8 text-center text-accent-content'>My Bids: <span>{myHabits.length}</span></h3>
                <table className="table mb-10 text-neutral-content font-semibold">
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
                                        <button><MdEditSquare className="h-5 w-5 text-primary" /></button>
                                        <button><RiDeleteBin6Fill className="h-5 w-5 text-error" /></button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyHabits;