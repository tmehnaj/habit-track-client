import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import HabitCard from '../Components/Card/HabitCard';
import { AuthContext } from '../Context/Context';
import Loader from '../Components/Loader/Loader'

const PublicHabits = () => {
    const { setLoading, loading } = useContext(AuthContext);
    const [allHabits, setAllHabits] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const axios = useAxios();


    useEffect(() => {
        axios.get('/habits')
            .then(data => {
                // console.log(data.data);
                setAllHabits(data.data);
            })
        setLoading(false);
    }, [axios, setLoading])

    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value;
        // console.log(search_text);
        setSearchLoading(true);

        axios.get(`/search?search=${search_text}`)
            .then(data => {
                // console.log(data);
                setAllHabits(data.data);
                setSearchLoading(false);
            })
    }



    return (
        <div className='container mx-auto px-2'>
            <title>Everyone's Habits</title>
            <div className='container mx-auto px-2'>
                <h2 className='text-neutral text-center py-12'>Everyone's Habits (<span>{allHabits.length}</span>)</h2>
            </div >
            <div className='px-2 flex flex-col md:flex-row items-center justify-between gap-3'>
                <form onSubmit={handleSearch} className=" md:mt-5   md:mb-10 flex gap-2 ">
                    <label className="input input-bordered bg-white/20 text-accent-content  focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input 
                        name="search"
                         type="search"
                         placeholder="Search"
                         />
                    </label>
                    <button className="btn btn-secondary ">{searchLoading ? "Searching...." : "Search"}</button>
                </form>

                <select
                    name="category"
                    id=""
                    className="input input-bordered max-w-36 bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg mt-5 mb-10">
                    <option value="">Filter By Category</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Walk">Walk</option>
                    <option value="Study">Study</option>
                    <option value="Work">Work</option>
                    <option value="Sleep">Sleep</option>
                </select>

            </div>

            {
                searchLoading ? <span className="loading loading-spinner text-accent-content text-center m-20"></span> : <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5 md:gap-y-8 lg:gap-y-10 pb-10'>
                    {allHabits.map(habit => <HabitCard key={habit._id} habit={habit}></HabitCard>)}
                </div>
            }
        </div>
    );
};

export default PublicHabits;