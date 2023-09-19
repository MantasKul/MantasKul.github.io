import { Fragment, createContext, useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import { Home } from './components/Home.js'
import { About } from './components/About.js';
import { Navbar } from './components/Navbar';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }

  return (
    <Fragment>
      <ThemeContext.Provider val={{ theme, toggleTheme }}>
        <div data-bs-theme={ theme }>
          <Navbar themeToggle={toggleTheme} theme={theme}/>



          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default App;

/*
          <div className="switch">
            <Switch onChange={ toggleTheme } checked={ theme === "dark" } offColor="#bb8fce" onColor="#000000" uncheckedIcon="" checkedIcon=""/>
          </div>
          */