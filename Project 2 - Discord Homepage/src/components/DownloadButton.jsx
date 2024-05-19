import React from "react";
import PropTypes from "prop-types";

const DownloadButton = ({
  content,
  shadow = "none",
  color= "black",
  href,
  backgroundColor = "white",
}) => {
  return (
    <a
      href={href}
      className={`py-4 px-8 text-xl text-${color} space-x-4 rounded-full flex items-center bg-${backgroundColor} transition-shadow hover:ease-in ease-ou duration-300 hover:cursor-pointer shadow-${shadow} hover:shadow-gray-700 text-sm font-medium justify-start`}
    >
      <div className="flex-grow-0">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
            <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
          </g>
        </svg>
      </div>
      <div className="m-auto w-full flex justify-center">
        <div>{content}</div>
      </div>
    </a>
  );
};

DownloadButton.propTypes = {
  content: PropTypes.string.isRequired,
  shadow: PropTypes.string,
  href: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

export default DownloadButton;
