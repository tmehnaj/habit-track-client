
// import React, { useContext } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router';
import Loader from '../Components/Loader/Loader'
import { AuthContext } from '../Context/Context';

const MainLayout = () => {

    // const { loading } = useContext(AuthContext);
    // if (loading === true) {
    //     return <Loader></Loader>
    // }

    return (
        <div className='flex flex-col min-h-screen'>
            <ScrollRestoration></ScrollRestoration>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;