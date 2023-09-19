import { Link } from "react-router-dom";
import Switch from 'react-switch';
import React from "react";

import './Navbar.css';

export const Navbar = ({themeToggle, theme}) => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>

                <Link to="/about">
                    <li>About</li>

                </Link>   
                           
                <li>
                    <Switch onChange={ themeToggle } checked={ theme === "dark" } offColor="#bb8fce" onColor="#000000" uncheckedIcon="" checkedIcon=""/>
                </li>
            </ul>
        </nav>
    );
}