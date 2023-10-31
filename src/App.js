import "./App.css";
import NavBar from "./components/nav_bar/NavBar";
import Hero from "./components/hero/Hero";
import Story from "./components/story/Story";
import Meet from "./components/meet/Meet";
import Characters from "./components/characters/Characters";
import Outro from "./components/outro/Outro";
import ReactAudioPlayer from "react-audio-player";
import bgm from "./assets/music/bg.mp3";
// import { useEffect } from "react";

function App() {

  return (
    <div className="App">
      <ReactAudioPlayer src={bgm} autoPlay loop />
      <NavBar />
      <Hero />
      <Story />
      <Meet />
      <Characters />
      <Outro />
    </div>
  );
}

export default App;
