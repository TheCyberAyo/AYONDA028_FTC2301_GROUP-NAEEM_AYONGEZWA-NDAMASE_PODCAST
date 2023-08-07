import React from "react";
import Ayongezwa from '../Pictures/Ayongezwa.png'
import Spongebob from '../Pictures/Spongebob.png'
import RotatingPhrases from "./RotatingPhrases";

const Header = () => {
  return (
    <header className='HeroSection'>
      <div>
        <img src={Spongebob} alt="Spongey" />
        <RotatingPhrases />
        <img src={Ayongezwa} alt="Ayoh" />
      </div>
    </header>
  );
};

export default Header;
