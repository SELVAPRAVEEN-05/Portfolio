import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Mobile App Developer",
          "MERN Stack Developer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName:'text-2xl md:text-3xl font-bold text-center text-primary',
        cursorClassName: 'text-primary text-2xl lg:text-3xl',        
      }}
    />
  );
}

export default Type;
