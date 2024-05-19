import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const Features = ({
  image,
  title,
  content,
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
  return (
    <div className={`bg-gray-200 py-48 px-10 flex flex-col items-center justify-center`} ref={featureRef}>
      <div className={`flex flex-col-reverse justify-center items-center w-fit`}>
        <img src={image} alt="" className="md:h-[73vh]" />
        <div className="p-2 flex flex-col justify-center items-center md:mx-20 space-y-5 w-fit">
          <h2 className="md:text-6xl text-4xl font-bold w-fit text-center">{title}</h2>
          <p className="md:text-xl text-base md:w-[45vw] w-fit text-center tracking-wider">{content}</p>
        </div>
      </div>
    </div>
  );
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
