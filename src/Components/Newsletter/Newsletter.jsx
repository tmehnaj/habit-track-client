import React from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
     const handleSubscribe = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        if(!email.trim()){
            toast.error('Please Enter Your Email')
        }else{
            toast.success('Subscription Successful');
        }
        
        e.target.reset();
    }

    return (
 <div  className='bg-dark-3 flex flex-col items-center mt-10 md:mt-15 backdrop-blur-lg bg-base-200'>
            <div className='container mx-auto py-20 text-center flex flex-col items-center  px-2'>
            <h2 className='text-neutral-content'>Subscribe to Our NewsLetter</h2>
            <p className='pt-3 text-base max-w-[700px] mx-auto text-info-content'>Joining our newsletter is the best way to get exclusive tips, latest updates, and special offers delivered straight to your inbox.Sign up now with just your email address and start receiving valuable content weekly.</p>
            <form onSubmit={handleSubscribe} className='flex flex-col md:flex-row justify-center items-center gap-3 pt-5'> 
                <label className=" ">
  <input type="text" name='email' placeholder="Enter your email" className="border-2 border-primary rounded-sm py-2 pl-2 md:pl-3 pr-2 sm:pr-4 md:pr-8 focus:outline-primary" />
</label>
<button className='general-btn box-content border-3 border-primary' type='submit'>Subscribe</button>
            </form>
        </div>
        </div>
    );
};

export default Newsletter;