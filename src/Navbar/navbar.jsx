import React from 'react';
import Logo from '../Assetts/logo.png.webp';
import { Link } from 'react-router-dom';
import MyCarousel from '../Navbar/mycarrousel';
import '../Navbar/navbar.css'; 

function Navbar() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <img src={Logo} alt="NBA Blog Logo" className="logo" />
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/teams">Teams</Link></li>
            <li><Link to="/category/players">Players</Link></li>
            <li><Link to="/category/draft">Draft</Link></li>
            <li><Link to="/category/stats">Stats</Link></li>
            <li><Link to="/category/opinion">Opinion</Link></li>
            <li><Link to="/category/history">History</Link></li>
          </ul>
          <MyCarousel></MyCarousel>
        </nav>
      </div>
    );
  }

export default Navbar;
