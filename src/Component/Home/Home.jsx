import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='text'>
            <h2 >Here is My Home Page </h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            

            </div>
            
        </div>
    );
};

export default Home;