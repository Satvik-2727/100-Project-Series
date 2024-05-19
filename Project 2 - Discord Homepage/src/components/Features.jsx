import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const Features = ({
  image,
  title,
  content,
  backgroundColor = "",
  flex = "",
  flexType = "",
}) => {
  const featureRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      featureRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%", // Adjust the start point as needed
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

    if (flex=="reverse") {
      return <div className={`bg-${backgroundColor} py-48 px-10`} ref={featureRef}>
      <div
        className={`flex lg:flex-row-reverse flex-col justify-center`}
      >
        <img src={image} alt="" className="h-96" />
        <div className="p-2 flex flex-col justify-center items-center mx-20 space-y-5">
          <h2 className="md:text-5xl font-bold w-96 text-3xl">{title}</h2>
          <p className="w-96 text-lg">{content}</p>
        </div>
      </div>
    </div>  
    } 
    else {
        return  <div className={`bg-${backgroundColor} py-48 px-10`} ref={featureRef}>
        <div
          className={`flex lg:flex-row flex-col justify-center`}
        >
          <img src={image} alt="" className="h-96" />
          <div className="p-2 flex flex-col justify-center items-center mx-20 space-y-5">
            <h2 className="md:text-5xl font-bold w-96 text-3xl">{title}</h2>
            <p className="w-96 text-lg">{content}</p>
          </div>
        </div>
      </div>  
    }
    
};

Features.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  flex: PropTypes.string,
  flexType: PropTypes.string,
};

export default Features;
