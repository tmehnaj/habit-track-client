import React from 'react';
import { Link } from 'react-router';

const HabitCard = ({habit}) => {
    const {title,image,category, _id} = habit;
    // console.log('id from habitcardd',_id);
    return (
       <div className="card scale bg-base-200 max-w-96 h-full hover:shadow-lg shadow-accent-content ce-y-3 justify-self-center">
            <figure className="px-3 sm:px-5 md:px-10 pt-7 md:pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-[190px] w-[286px] lg:h-[210px] lg:w-[306px]" />
            </figure>
            <div className="card-body items-center text-center px-2 sm:px-3 md:px-10 ">
             <h3 className="card-title text-neutral-content w-full">{title}</h3>

                <div className='flex items-center justify-between gap-2 w-full my-4'>
                    <div class="badge badge-secondary bg-secondary">{category}</div>
                    <div className="badge badge-warning">streak</div>
                </div>
                <div className='w-full'>
                    <Link to={`/habit-details/${_id}`}><button className='general-btn2 w-full'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HabitCard;