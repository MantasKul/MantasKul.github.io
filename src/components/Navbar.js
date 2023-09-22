import { NavLink, Link } from "react-router-dom";
import Switch from 'react-switch';
import React from "react";

import './Navbar.css';

export const Navbar = ({themeToggle, theme}) => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li className="button"> Home </li>
                </Link>

                <Link to="/about">
                    <li className="button">About</li>
                </Link>
                {/*
                <Link to="/skills">
                    <li className="button">Skills</li>
                </Link> */}
                
                <Link to="/projects">
                    <li className="button">Projects</li>
                </Link>  
                           
                <li>
                    <Switch onChange={ themeToggle } 
                            checked={ theme === "dark" }
                            uncheckedIcon={ false }
                            checkedIcon={ false }
                            offColor="#bb8fce" 
                            onColor="#000000"/>
                </li>
            </ul>
        </nav>
    );
}