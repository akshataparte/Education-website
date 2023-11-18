import React from 'react';
import '../styles/hero.css';
import { FaStar } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { IoLogoApple } from 'react-icons/io5';

function Hero() {
  return (
    <div className="container">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Turn Your Judiciary Dream Into Reality</h1>
          <h2>
            Revolutionize Your Prelims + Mains + Interview Preparation in an
            Integrated Manner.
          </h2>
          <p>#1 Most Downloaded Judicial Services App</p>
          <div className="hero-btn">
            <div className="btn-google-play">
              <span>
                <IoLogoGooglePlaystore
                  style={{ fontSize: '30px', marginRight: '5px' }}
                />
              </span>
              <div className="btn-text">
                <span className="text-sm">get it on</span>
                <span>google play</span>
              </div>
            </div>
            <div className="btn-store">
              <span>
                <IoLogoApple style={{ fontSize: '30px', marginRight: '5px' }} />
              </span>
              <div className="btn-text">
                <span className="text-sm">Available on the</span>
                <span>App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/hero-image.png"
            alt="hero-image"
            className="hero-image"
          />
        </div>
      </div>

      <div className="review">
        Why <a href="#">Edzorb Law App</a> is ❤ by Over 10,000+ Users.{' '}
        <span style={{ color: 'yellow' }}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>{' '}
        <a href="#">Read Reviews</a>
      </div>
    </div>
  );
}

export default Hero;
