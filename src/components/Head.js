// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Head.css';
// import About from './components/About.js ';

const Head = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/team">Join Our Team</Link></li>
          <li><Link to="/service">Service Features</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;
