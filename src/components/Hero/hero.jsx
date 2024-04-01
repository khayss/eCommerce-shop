import React from 'react';
import './hero.css';
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/vr.webp'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>EXPLORE YOUR FANTASY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>products</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Arrival</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
