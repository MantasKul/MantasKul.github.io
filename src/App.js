import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import { Home } from './pages/Home.js'
import { About } from './pages/About.js';

function App() {
  return (
    <Fragment>
        <div>
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
    </Fragment>
  );
}

export default App;
