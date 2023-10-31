import React from 'react';
import './Outro.css';
// import { FaVolumeHigh } from "react-icons/fa6";

function Outro() {
  return (
    <div className='outro-container'>
        <div className="outro_one">
            <h2 className="outro-title-one">Join the Halloween Adventure</h2>
            <p className="outro-para">Halloween is a time for magic, mystery, and storytelling. We invite you to explore these tales and make this Halloween unforgettable.</p>
            <div className="outro-display-one"></div>
        </div>
        <div className="outro_two">
            <h3 className="outro-title-two">Ready to Start the Adventure?</h3>
            <button className="btn-end">Enter the Haunted Tales</button>
        </div>

{/* <div className="sound-container">
        <FaVolumeHigh className='sound'/>
</div> */}
    </div>
  )
}

export default Outro