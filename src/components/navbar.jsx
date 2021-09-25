import React, { Component } from 'react';
import './navbar.css';

const Navbar = ({totalCounters}) => {
    return (  
        <nav>
            <h2 className="navbar">
                Total Counters: {totalCounters}
            </h2>
        </nav>
    );
}
 
export default Navbar;