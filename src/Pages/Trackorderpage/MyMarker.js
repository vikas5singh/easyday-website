import React from "react";

const MyMarker = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
     
  };

  return (
    <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
