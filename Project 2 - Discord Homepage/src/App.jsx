import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const hero_image = '../assets/hero_bg.svg'

const App = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Header imageUrl={hero_image}/>
        <Main/>
      </div>
    </div>
  );
};

export default App;
