import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Context/Context';
// import useAxios from '../hooks/useAxios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Details = () => {
    const {setLoading}=useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    const [habit,setHabit] = useState({});
    // console.log(id);

    useEffect(()=>{
        axiosSecure.get(`/habits/${id}`)
        .then(data=>{
            // console.log('from get habit by id');
            // console.log('the data',data)
            setHabit(data.data); 
        });
         setLoading(false);
    },[axiosSecure,id,setLoading])


    return (
        <div>
            <div>{habit.title}</div>
        </div>
    );
};

export default Details;