import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home.js'
import { About } from './pages/About.js';
import { Fragment } from 'react';

export const Routes = () => {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </Fragment>
    )
}