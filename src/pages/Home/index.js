import React, { useEffect } from 'react';
import 'react-sticky-header/styles.css';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import './styles.css'

const Home = () => {
    return (
        <>
            <Sidebar />
            <Navbar />       
        </>
    );
}

export default Home;