import React from 'react'
import './Hero.css';
import HeroBg from '../../assets/images/hero.png';

function Hero() {
  return (
    <div className='main'>
        <img src={HeroBg} alt="Hero Bg" />
        <h1 className="title"><span>Haunted</span> <br />Halloween Tales</h1>
        <h4 className="sub-title">A journey through the spine-tingling stories of Halloween</h4>
        <button className="btn-hero">Explore Now</button>
    </div>
  )
}

export default Hero