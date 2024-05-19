import React, { useState } from "react";
import Button from "./Button";
import OpenDiscord from "./OpenDiscord";
import { NavbarContent } from "../index.js";
import DownloadButton from "./DownloadButton.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center relative">
      <nav className="mt-5 md:w-2/3 lg:w-2/3 w-full">
        <ul className="flex justify-evenly items-center">
          <div>
            <img src="../../assets/discord_logo.svg" className="w-36" alt="Discord Logo" />
          </div>
          <div className="md:opacity-100 lg:opacity-100 opacity-0 flex text-base space-x-10 text-white font-semibold w-0 md:w-fit lg:w-fit">
            {NavbarContent.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.content}</a>
              </li>
            ))}
          </div>
          <div className="">
            <OpenDiscord
              content="Open Discord"
              href="https://discord.com/channels/@me"
              shadow="lg"
            />
          </div>
          <div className="md:opacity-0 lg:opacity-0 opacity-100">
            <img
              src="../../assets/hamburger.svg"
              alt="Hamburger Menu"
              className="cursor-pointer"
              onClick={toggleHamburger}
            />
          </div>
        </ul>
      </nav>
      <div
        className={`fixed z-20 top-0 h-screen bg-white text-black rounded-l-lg transition-all duration-300 ease-in-out ${
          isOpen ? "w-1/2" : "w-0"
        } overflow-hidden shadow-lg`}
      >
        <div className="flex justify-between items-center p-5">
          <img src="../../assets/discord_logo.svg" className="w-28 invert" alt="Discord Logo" />
          <button onClick={toggleHamburger} className="text-3xl">
            &times; 
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-5 p-5">
          {NavbarContent.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-lg">
                {item.content}
              </a>
            </li>
          ))}
        </ul>
        <DownloadButton content="Download" backgroundColor="discord_blue" color="white"/>
      </div>
    </div>
  );
};

export default Navbar;
