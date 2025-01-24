// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        WedSymphony
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-title">Services</span>
          <ul className="dropdown-menu">
            <li><Link to="/weddingplanning" className=".dropdown-item">Wedding Planning</Link></li>
            <li><Link to="/vendormanagement" className=".dropdown-item">Vendor Management</Link></li>
            <li><Link to="/venueselection" className=".dropdown-item">Venue Selection</Link></li>
            <li><Link to="/eventcoordination" className=".dropdown-item">Event Coordination</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/customerlogin">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
