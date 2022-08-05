import React, { useState } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine, RiArrowDropRightLine, RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

import Home from './pages/Home'

import './index.css'

export default function Routes() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <HashRouter>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height" />
            </head>
            <div >
                <div className={'header'}>
                    oi
                </div>
                <div>
                    <Route path="/" exact component={Home} />
                </div>
            </div>
        </HashRouter>
    );
}