import React from "react";
import "./Characters.css";
import vampire from "../../assets/images/vampire.jpg";
import franky from "../../assets/images/franky.jpg";
import pumpkinKing from "../../assets/images/scarypumk.jpg";
import witch from "../../assets/images/witch.jpg";

function Characters() {
  return (
    <>
      <div className="characters-container">
        <div className="character-holder">
          <div className="character-info">
            <h2 className="character-title">The Vampire's Curse</h2>
            <p className="character-detail">
              Dive into the immortal world of the vampire. Learn about their
              mysterious powers and the legends that surround them.
            </p>
            <div className="btn-details">Know More</div>
          </div>
          <div className="character-img violet">
            <img src={vampire} alt="Vampire" />
          </div>
        </div>
      </div>
      <div className="characters-container ">
        <div className="character-holder rev">
          <div className="character-info">
            <h2 className="character-title greenText">
              The Tale of Frankenstein
            </h2>
            <p className="character-detail">
              A laboratory with lightning and Frankenstein's monster.
            </p>
            <div className="btn-details">Know More</div>
          </div>
          <div className="character-img green flip">
            <img src={franky} alt="Frankenstein" />
          </div>
        </div>
      </div>

      <div className="characters-container ">
        <div className="character-holder">
          <div className="character-info">
            <h2 className="character-title orangeText">
              The Legend of the Pumpkin King
            </h2>
            <p className="character-detail">
              Unearth the folklore of the Pumpkin King, the guardian of harvest
              and the embodiment of Halloween spirit.
            </p>
            <div className="btn-details">Know More</div>
          </div>
          <div className="character-img orange flip">
            <img src={pumpkinKing} alt="Pumpkin King"  />
          </div>
        </div>
      </div>

      <div className="characters-container ">
        <div className="character-holder rev">
          <div className="character-info">
            <h2 className="character-title greenText">The Witch's Brew</h2>
            <p className="character-detail">
              Peer into the world of witches and their magical concoctions.
              Learn about their spells, curses, and secrets.
            </p>
            <div className="btn-details">Know More</div>
          </div>
          <div className="character-img green">
            <img src={witch} alt="Witch" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Characters;
