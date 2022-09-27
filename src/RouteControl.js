import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';

export default function RouteControl() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}
