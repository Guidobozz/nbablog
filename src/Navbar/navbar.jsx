import React, { useState } from 'react';
import Logo from '../Assetts/logo.png.webp';
import { Link } from 'react-router-dom';
import MyCarousel from '../Navbar/mycarrousel';
import '../Navbar/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <img src={Logo} alt="NBA Blog Logo" className="logo" />

                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/category/teams" onClick={toggleMenu}>Teams</Link></li>
                    <li><Link to="/category/players" onClick={toggleMenu}>Players</Link></li>
                    <li><Link to="/category/draft" onClick={toggleMenu}>Draft</Link></li>
                    <li><Link to="/category/stats" onClick={toggleMenu}>Stats</Link></li>
                    <li><Link to="/category/opinion" onClick={toggleMenu}>Opinion</Link></li>
                    <li><Link to="/category/history" onClick={toggleMenu}>History</Link></li>
                </ul>

                <MyCarousel />
            </nav>
        </div>
    );
}

export default Navbar;
