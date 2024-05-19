import React from "react";
import PropTypes from "prop-types";

const OpenDiscord = ({
  content,
  onHighlightColor = "blue-600",
  shadow = "none",
  href,
  color = "black",
  backgroundColor = "white",
}) => {
  return (
    <a
      href={href}
      className={`py-2 px-4 text-sm rounded-full flex text-${color} bg-${backgroundColor}  hover:text-${onHighlightColor} shadow-${shadow} hover:shadow-gray-700 transition-shadow hover:ease-in ease-out duration-300 text-sm font-bold items-center`}
    >
      {content}
    </a>
  );
};

OpenDiscord.propTypes = {
  content: PropTypes.string.isRequired,
  onHighlightColor: PropTypes.string,
  shadow: PropTypes.string,
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  svg: PropTypes.string,
};

export default OpenDiscord;
