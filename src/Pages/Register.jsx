import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [error, setError] = useState('');
  // const [eye,setEye] = useState(false);
  const { createUser, setUser, googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  // const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(e.target);
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(name.trim().length > 30){
       setError('Name cannot be longer than 30 characters');
      return;
    }
    //clean
    setError('');

    //regular expression for password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter');
      return;
    }
    createUser(email, password)
      .then(result => {
        const newUser = result.user;
        setUser(newUser);
        // setLoading(false);
        toast.success('Your account has been created successfully!');
        e.target.reset();
        navigate('/');
      })
      .catch(err => {
        let errorMessage = err.message;

        // Check for common Firebase errors and provide a user-friendly message
        if (err.code === 'auth/email-already-in-use') {
          errorMessage = 'This email is already in use.';
        } else if (err.code === 'auth/invalid-email') {
          errorMessage = 'The email address is not valid.';
        } else if (err.code === 'auth/weak-password') {
          errorMessage = 'The password must be at least 6 characters.';
        }

        toast.error(errorMessage);
        //  setLoading(false);
      })
      .finally(() => { setLoading(false); })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const newUser = result.user;
        setUser(newUser);
        // setLoading(false);
        toast.success('LogIn Successful!');
        navigate('/');
      })
      .catch(err => {
        toast.error(err.message);
        // console.log(err);  
        setError(err.message);
        // setLoading(false);
      })

  }

  const handleEmailOnChange = (e) => {
    const email = e.target.value;
    const regxForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      setError('Email is required');
    } else if (!regxForEmail.test(email)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  }


  return (
    <div className="container mx-auto my-20 flex items-center justify-center  relative overflow-hidden">
      <title>Sign Up</title>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-info-content">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Habit Track! </h1>
        </div>

        <div className="w-full max-w-md backdrop-blur-lg bg-base-200 border border-white/20 shadow-2xl rounded-2xl p-8">
          <h2 className="text-neutral-content mb-2 text-center drop-shadow-sm py-2">SignUp Now</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* name field */}
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
              />
            </div>

            {/* photo URL */}
            <div>
              <label className="block text-sm mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
              />
            </div>

            {/* email field */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                onChange={handleEmailOnChange}
                type="email"
                name="email"
                required
                placeholder="Enter your Email"
                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
              />
            </div>


            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                // type={show ? "text" : "password"}
                type='password'
                name="password"
                required
                placeholder="Enter Your Password"
                autoComplete="off"
                autoCorrect="off"
                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
              />
              {/* <span
                                   onClick={() => setShow(!show)}
                                   className="absolute right-3 top-9 cursor-pointer z-50"
                               >
                                   {show ? <FaEye /> : <IoEyeOff />}
                               </span> */}

            </div>

            <button type='submit' className="general-btn min-w-full">SignUp</button>
            {/* error */}
            {
              error ? <p className='text-red-700 font-semibold'>{error}</p> : ''
            }

          </form>



          {/* Divider */}
          <div className="flex w-full flex-col">
            <div className="divider">or</div>
          </div>

          {/* Google Signin */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-1.5 rounded-lg w-full font-semibold transition-colors cursor-pointer outline-2 outline-primary hover:bg-accent hover:text-white scale"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google </button>
          <p>New to Our Website? Please <Link to="/login" className='underline text-primary py-2'>LogIn</Link></p>
        </div>
      </div>

    </div>
  );
};

export default Register;