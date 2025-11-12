// import { Gamepad2 } from 'lucide';
import React, { useContext } from 'react';
import logoImg from '../../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/Context';
import userIcon from '../../assets/user.png';
import { toast } from 'react-toastify';



const Navbar = () => {
  const { user, logOutUser, setLoading, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  
    // const { loading } = useContext(AuthContext);
    // if (loading === true) {
    //     return ;

    // }
  const handleLogOut = (e) => {
    e.preventDefault();
    logOutUser()
      .then(() => {
        toast.success('Log Out Successfully!');
        // setLoading(false);
      })
      .catch(err => {
       // console.log(err);
      })
  }


  //click on profile picture
  const handleProfileClick = () => {
    navigate('/profile');
  }

  //all nav links 
  const links = <>
    <NavLink to='/'><li className="px-2 pb-0.5 border-b-2 border-transparent">Home</li></NavLink>
    <NavLink to='/games#'><li className="px-2 pb-0.5 border-b-2 border-transparent">Games</li></NavLink>
    {user && <NavLink to='/profile#'><li className="px-2 pb-0.5 border-b-2 border-transparent">Profile</li></NavLink>}
  </>

  return (
    <nav className=" bg-[#0d071b] shadow-sm py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-3 pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link to="/#">

            <div className='flex gap-2 items-center whitespace-nowrap'>
              <figure className='h-10 w-10'>
                <img src={logoImg} alt="" />
              </figure>
              <h3 className="text-lg md:text-[22px] font-extrabold text-transparent bg-clip-text bg-linear-[-75deg,#9F62F2,#632EE3] brand-name">Game Hub</h3>
            </div></Link>
          {/* <a className="text-xl font-medium">Book Palace</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          { loading ? (<></>)
           : user ? <>
              <figure onClick={handleProfileClick} className='hover:cursor-pointer'>
                <img src={user?.photoURL || userIcon} className='h-10 w-10 rounded-full' alt="user profile image" />
              </figure>
              <button onClick={handleLogOut} className='ml-3 gradient-btn-primary-1'>Log Out</button>
            </>
              : <>
                <Link to="/login#">
                  <button className="gradient-btn-primary-1 mr-3">LogIn</button>
                </Link>
                <Link to="/register#">
                  <button className="gradient-btn-primary-2">SignUp</button>
                </Link>
              </>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;