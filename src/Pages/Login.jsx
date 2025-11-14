import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/Context';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { signInUser, googleSignIn, setUser, setLoading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();


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


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const newUser = result.user;
        setUser(newUser);
        setLoading(false);
        toast.success('LogIn Successful!');
        navigate('/');
      })
      .catch(err => {
        toast.error(err.message);
        setError(err.message);
        setLoading(false);
      })

  }

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //clean
    setError('');
    signInUser(email, password)
      .then(result => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        toast.success('Log In Successfully!');
         e.target.reset();
        navigate(location?.state || '/');
      })
      .catch(err => {
        //  console.log(err.message);

        if (err.code === 'auth/invalid-email') {
          toast.error('Invalid email address. Please enter a valid one.');
        }
        else if (err.code === 'auth/user-disabled') {
          toast.error('This account has been disabled. Please contact support.');
        }
        else if (err.code === 'auth/user-not-found') {
          toast.error('No user found with this email.');
        }
        else if (err.code === 'auth/wrong-password' || err.message.includes('invalid-credential')) {
          toast.error('Wrong email or password.');
        }
        else if (err.code === 'auth/too-many-requests') {
          toast.error('Too many failed attempts. Please try again later.');
        }
        else if (err.code === 'auth/network-request-failed') {
          toast.error('Network error. Check your internet connection.');
        }
        else {
          toast.error('Something went wrong. Please try again later.');
        }
        
      })
      .finally(()=>{setLoading(false);})
  }


  return (
         <div className="container mx-auto my-20 flex items-center justify-center  relative overflow-hidden">
            <title>Log In</title>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-info-content">
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome Back! </h1>
                </div>

                <div className="w-full max-w-md backdrop-blur-lg bg-base-300 border border-white/20 shadow-2xl rounded-2xl p-8">
                    <h2 className="text-neutral-content mb-2 text-center drop-shadow-sm py-2">LogIn Now</h2>

                    <form onSubmit={handleLogIn} className="space-y-4">
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
                            <p className="hover:underline cursor-pointer" > Forget password</p>
                        </div>

                        <button type='submit' className="general-btn min-w-full">Login</button>
                        {/* error */}
                        {
                            error? <p className='text-red-700 font-semibold'>{error}</p> : ''
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
                        <p className='py-2.5'>New to Our Website? Please <Link to="/register" className='underline text-primary py-2'>Sign Up</Link></p>
                </div>
            </div>

        </div>
    );

};

export default Login;