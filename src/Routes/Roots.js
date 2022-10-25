import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Roots;