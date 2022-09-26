import React from "react";

const StartShape = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(255, 95, 109, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M34.1,-20.4C40,-9.5,37.7,5.5,30.6,16.6C23.6,27.8,11.8,35.1,0,35.2C-11.9,35.2,-23.8,27.9,-30.3,17C-36.8,6.2,-37.9,-8.2,-32,-19.1C-26,-30.1,-13,-37.6,0.5,-37.9C14.1,-38.3,28.2,-31.3,34.1,-20.4Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default StartShape;
