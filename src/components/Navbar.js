import { Link } from "react-router-dom";
import Switch from 'react-switch';
import React from "react";

export const Navbar = ({themeToggle, theme}) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-nav">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link class="nav-link" to="/about">About</Link>

                    <div className="switch">
                        <Switch onChange={ themeToggle } checked={ theme === "dark" } offColor="#bb8fce" onColor="#000000" uncheckedIcon="" checkedIcon=""/>
                    </div>
                </div>
            </div>
        </nav>
    );
}