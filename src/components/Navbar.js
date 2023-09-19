import { Link } from "react-router-dom";
import Switch from 'react-switch';
import React from "react";

import './Navbar.css';

export const Navbar = ({themeToggle, theme}) => {
    return (
        <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>                    
                        <li>
                            <div className="switch">
                                <Switch onChange={ themeToggle } checked={ theme === "dark" } offColor="#bb8fce" onColor="#000000" uncheckedIcon="" checkedIcon=""/>
                            </div>
                        </li>
                    </ul>
        </nav>
    );
}