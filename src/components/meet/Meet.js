import React from "react";
import "./Meet.css";
import grave_one from "../../assets/images/grave01.png";
import grave_two from "../../assets/images/grave02.png";
import grave_three from "../../assets/images/grave03.png";
import grave_four from "../../assets/images/grave04.png";

import vampChar from "../../assets/images/vampChar.png";
import frankChar from "../../assets/images/frankChar.png";
import pumpChar from "../../assets/images/pumpChar.png";
import witchChar from "../../assets/images/witchChar.png";

function Meet() {
  return (
    <div className="meet-container">
      <h2 className="meet-title">Meet the Characters</h2>
      <p className="meet-para">
        Get to know the iconic characters that haunt our dreams and bring
        Halloween to life. Each character has its own tale to tell.
      </p>

      <div className="grave-container">
        <div className="grave-holder">
          <img src={grave_one} alt="First Grave" />
          <div className="character">
            <img src={vampChar} alt="Grave" />
          </div>
          <h4 >Vampire</h4>
        </div>
        <div className="grave-holder">
          <img src={grave_two} alt="Second Grave" />
          <div className="character">
            <img src={frankChar} alt="Grave" />
          </div>
          <h4 >Frankenstein</h4>
        </div>
        <div className="grave-holder">
          <img src={grave_three} alt="Three Grave" />
          <div className="character">
            <img src={pumpChar} alt="Grave" />
          </div>
          <h4>Pumpkin King</h4>
        </div>
        <div className="grave-holder">
          <img src={grave_four} alt="Four Grave" />
          <div className="character">
            <img src={witchChar} alt="Grave" />
          </div>
          <h4 >Witch</h4>
        </div>
      </div>
    </div>
  );
}

export default Meet;
