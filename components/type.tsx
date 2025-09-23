import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Mobile App Developer",
          "MERN Stack Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName:'text-xl md:text-2xl lg:text-3xl font-bold text-center text-primary',
        cursorClassName: 'text-primary text-2xl lg:text-3xl',        
      }}
    />
  );
}

export default Type;
