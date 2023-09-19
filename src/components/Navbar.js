import { Link } from "react-router-dom";
import Switch from 'react-switch';
import React from "react";

export const Navbar = ({themeToggle, theme}) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>                    
                        <li class="nav-item">
                            <div className="switch">
                                <Switch onChange={ themeToggle } checked={ theme === "dark" } offColor="#bb8fce" onColor="#000000" uncheckedIcon="" checkedIcon=""/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}