import React from "react";
import "./Story.css";
import storyBg from "../../assets/images/storyBg.png";

function Story() {
  return (
    <div className="story-container">
      <img src={storyBg} alt="Story Bg" />
      <div className="container">
        <h2 className="story-title">The Enchanted Night</h2>
        <p className="story-para">
          On a moonlit Halloween night, when darkness blankets the world and
          pumpkins glow, we embark on a journey into the mystical world of
          Halloween.
        </p>
      </div>
    </div>
  );
}

export default Story;
