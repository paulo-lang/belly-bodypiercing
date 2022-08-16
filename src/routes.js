import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import Navbar from './Components/Navbar/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    );
}
