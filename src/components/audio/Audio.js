import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';


const Audio = () => {
  useEffect(() => {
    const audio = new Audio('../../assets/music/bg.mp3'); // Path to your audio file
    audio.play();

    return () => {
      audio.pause();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* You can add controls or other UI elements related to audio if needed */}
    </div>
  );
};

export default Audio;
