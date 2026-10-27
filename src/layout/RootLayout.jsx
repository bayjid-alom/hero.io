import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const RootLayout = () => {
    return (
        <div>

            <Navbar></Navbar>

            <main className="pt-25">
                <Outlet />
            </main>


            <Footer></Footer>

        </div>
    );
};

export default RootLayout;