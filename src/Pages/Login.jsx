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
    const emailDomains = [
      // Popular public email providers
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "aol.com",
      "protonmail.com",
      "zoho.com",

      // Educational domains
      "harvard.edu",
      "mit.edu",
      "stanford.edu",
      "ox.ac.uk",

      // Government domains
      "usa.gov",
      "gov.uk",
      "bangladesh.gov.bd",

      // Organization / NGO
      "unicef.org",
      "who.int",
      "redcross.org",

      // Example company domains
      "google.com",
      "microsoft.com",
      "tesla.com"
    ];
    const domain = email.split('@')[1];
    ;
    if (!email.trim()) { setError('Email is required') }
    else if (!email.includes('@')) { setError('Email must contain @') }
    else if (email.startsWith('@') || email.endsWith('@')) { setError('email can not starts or ends with @') }
    else if (!emailDomains.includes(domain)) { setError('please provide a correct domain') }
    else if (!regxForEmail.test(email)){ setError('please enter a valid email address!') }
    else{
      setError('');
    }
  }


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const newUser = result.user;
        setUser(newUser);
        setLoading(false);
        // toast.success('LogIn Successful!');
        navigate('/#');
      })
      .catch(err => {
        // toast.error(err.message);
        // console.log(err);
        setError(err.message);
        setLoading(false);
      })

  }

  const handleLogIn = (e) => {
    //console.log('event from login button',e);
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
        setLoading(false);
        navigate(location?.state || '/#');
      })
      .catch(err => {
        //  console.log(err.message);

        if (err.code === 'auth/invalid-email') {
          setError('Invalid email address. Please enter a valid one.');
        }
        else if (err.code === 'auth/user-disabled') {
          setError('This account has been disabled. Please contact support.');
        }
        else if (err.code === 'auth/user-not-found') {
          setError('No user found with this email.');
        }
        else if (err.code === 'auth/wrong-password' || err.message.includes('invalid-credential')) {
          setError('Wrong email or password.');
        }
        else if (err.code === 'auth/too-many-requests') {
          setError('Too many failed attempts. Please try again later.');
        }
        else if (err.code === 'auth/network-request-failed') {
          setError('Network error. Check your internet connection.');
        }
        else {
          setError('Something went wrong. Please try again later.');
        }
        setLoading(false);
      })
  }


  return (
    <div className="hero bg-[rgba(13,7,27,0.6)] min-h-screen px-2">
      <title>Log In</title>
      <div className="container mx-auto card bg-linear-[-45deg,#9F62F2,#632EE3,#0d071b] w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className='text-3xl font-bold text-center'>LogIn Now!</h2>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                onChange={handleEmailOnChange}
                ref={emailRef}
                type="email"
                name='email'
                className="input"
                placeholder="Email"
                required />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" required />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="general-btn mt-4">Login</button>
              {/* error */}
              {
                error ? <p className='text-red-700 font-semibold py-2'>{error}</p> : ''
              }

            </fieldset>
          </form>
          {/* divider */}
          <div className="flex w-full flex-col">
            <div className="divider divider-primary">or</div>
          </div>
          {/* Google */}
          <button onClick={handleGoogleSignIn} type='button' className="google-btn">
            <FcGoogle className='h-5 w-5' />
            SignIn with Google
          </button>
          <p>New to our Website? Please <Link to="/register#" className='underline text-[#0d071b]'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;