import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
}
