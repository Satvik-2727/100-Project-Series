import React from "react";
import { BeforeFooter, MainContent } from "../index.js"; // Import the data
import Features from "./Features.jsx"; // Import the Features component
import HomeDownload from "./HomeDownload.jsx";
import DownloadButton from "./DownloadButton.jsx";

const Main = () => {
  return (
    <div className="main-container">
      {MainContent.map((feature) => (
        <Features
          key={feature.title}
          image={feature.image}
          title={feature.title}
          content={feature.content}
          backgroundColor={feature.backgroundColor}
          flex={feature.flex}
        />
      ))}
      {BeforeFooter.map((feature) => (
        <HomeDownload
          key={feature.title}
          title={feature.title}
          content={feature.content}
          image={feature.image}
        />
      ))}
      <div className="flex flex-col justify-center h-[30vh] items-center w-full">
        <div className="bg-[url('../../assets/images/stars_imagine.svg')] h-1/3 bg-no-repeat md:w-[50vw] p-2 bg-contain flex justify-center items-center w-full">
          <div className="md:w-fit mt-28 flex flex-col items-center space-y-8 px-10">
            <div className="md:text-3xl font-bold w-full text-xl">
              Ready to Start your journey?
            </div>
            <div className="absolute md:relative md:w-fit ">
              <DownloadButton content="Download For Windows" backgroundColor="discord_blue" shadow="lg" color="white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
