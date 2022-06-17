import React, { useState } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import Home from './Components/Pages/Home/index.js'

export default function Routes() {
    return (
        <HashRouter>
            <div className='header'>
                
            </div>
            <div>
                <div className="header">
                    
                </div>
                <div>
                    <Route path="/" exact component={Home} />
                </div>
            </div>
        </HashRouter>
    );
}
