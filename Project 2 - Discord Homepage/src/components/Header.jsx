import React from "react";
import PropTypes from "prop-types";
import { hero_text } from "../index.js";
import Navbar from "./Navbar";
import Button from "./Button.jsx";
import DownloadButton from "./DownloadButton.jsx";

const Header = ({ imageUrl }) => {
  return (
    <header className="bg-discord_blue w-full flex justify-center items-center relative">
      <div
        className="w-full md:h-[60vh] h-screen bg-[length:0px_0px] md:bg-cover lg:bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Navbar />
        <div className="flex flex-col items-center lg:justify-center h-fit lg:mt-10 relative">
          <div className="hero_text text-white flex flex-col justify-center items-center text-center p-5">
            {hero_text.map((d, index) => (
              <div key={index} className="flex flex-col lg:items-center items-start space-y-11 ">
                <div className="black-ops-one-regular md:text-5xl lg:text-5xl text-3xl text-center">
                  {d.Heading.toUpperCase()}
                </div>
                <div className="lg:text-lg lg:w-[40vw] space-x-12 tracking-widest lg:text-center">
                  {d.description}
                </div>
              </div>
            ))}
          </div>
          <div className="btns">
            <div className="lg:flex lg:flex-row flex-col lg:space-y-0 lg:space-x-4 space-y-5 w-fit">
              <DownloadButton content="Download for Windows" shadow="lg" />
              <Button
                content="Open Discord in your browser"
                font="medium"
                shadow="lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero_image">
        <img src="../../assets/images/hero_home_image_2.svg" alt="" className="lg:absolute bottom-0 right-0 md:w-[30vw] w-0" />
        <img src="../../assets/images/hero_home_image.svg" alt="" className="absolute bottom-0 left-0 md:w-[30vw]" />
      </div>
    </header>
  );
};

Header.propTypes = {
  backgroundColor: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

export default Header;
