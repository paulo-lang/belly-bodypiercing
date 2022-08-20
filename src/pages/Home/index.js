import React, { useState } from 'react';
import 'react-sticky-header/styles.css';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import Home from '../../Components/Home';
import About from '../../Components/About';

const Spa = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Home /> 
            <About />

        </>
    );
}

export default Spa;