import { Fragment } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import { Home } from './pages/Home.js'
import { About } from './pages/About.js';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Fragment>
      <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
    </Fragment>
  );
}

export default App;
