import React from "react";
import PropTypes from "prop-types";

const Button = ({
  content,
  onHighlightColor = "blue-600",
  shadow = "none",
  href,
  color = "white",
  font = "bold",
}) => {
  return (
    <a
      href={href}
      className={`py-4 px-6 text-xl rounded-full flex text-${color} bg-black hover:text-${onHighlightColor} hover:bg-[#23272a] hover:cursor-pointer shadow-${shadow} hover:shadow-gray-700 transition-all hover:ease-in ease-out duration-300 text-sm font-${font} items-center`}
    >
      {content}
    </a>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onHighlightColor: PropTypes.string,
  shadow: PropTypes.string,
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  font: PropTypes.string,
};

export default Button;
