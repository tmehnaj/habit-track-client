
// import React, { useContext } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import Loader from '../Components/Loader/Loader'
import { AuthContext } from '../Context/Context';
import { useContext } from 'react';

const MainLayout = () => {

    const { loading } = useContext(AuthContext);
    if (loading === true) {
        return <Loader></Loader>
    }
    // const navigation = useNavigation();
    // if (navigation.state === 'loading') { return <Loader></Loader> }

    return (
        <div className='flex flex-col min-h-screen'>
            <ScrollRestoration></ScrollRestoration>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
           <footer>
             <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;