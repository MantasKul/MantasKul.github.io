import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home.js'
import { About } from './pages/About.js';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
