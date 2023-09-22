import { Fragment, createContext, useState, useEffect } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import { Home } from './components/Home.js'
import { About } from './components/About.js';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Navbar } from './components/Navbar';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }

  return (
    <Fragment>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="navbar" id={ theme } data-bs-theme={ theme } style={{color: "red"}}>
          <Navbar themeToggle={ toggleTheme } theme={theme}/>
        </div>

        <div className="main-block" id={ theme }>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            {/*<Route exact path="/skills" element={<Skills />} />*/}
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default App;
