import React from 'react';
import '../styles/header.css';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { IoLogoApple } from 'react-icons/io5';

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img src="/images/edzorb-logo.png" className="logo" alt="logo" />

        <nav className="nav-1">
          <a href="#">Premium+</a>
          <a href="#">Blogs</a>
          <a href="#">Podcast</a>
        </nav>

        <nav className="nav-2">
          <span>
            {' '}
            <IoLogoGooglePlaystore
              style={{ fontSize: '30px', marginRight: '5px', color: '#fff' }}
            />
          </span>
          <span>
            <IoLogoApple
              style={{ fontSize: '30px', marginRight: '5px', color: '#fff' }}
            />
          </span>

          <button className="btn-login">Login</button>
          <button className="btn-sign-up">Sign Up</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
