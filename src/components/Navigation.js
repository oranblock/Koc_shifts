import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/mail">Mail</Link></li>
                <li><Link to="/vacation">Vacation</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
