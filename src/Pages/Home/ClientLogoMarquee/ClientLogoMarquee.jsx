import React from 'react';
import Marquee from "react-fast-marquee";   // ✅ using this instead of <marquee>

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import starPeople from "../../../assets/brands/start-people 1.png";
import start from "../../../assets/brands/start.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";

const allLogo = [amazon, casio, moonstar, randstad, starPeople, start, amazonVector];

const ClientLogoMarquee = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-xl text-[#03373D] md:text-2xl font-semibold">
          We've helped thousands of sales teams
        </h1>
      </div>

      {/* ✅ Changed from <marquee> to <Marquee> */}
      <Marquee 
        speed={100}          // controls scroll speed
        gradient={false}    // removes fade effect at edges
        direction="left"    // ✅ ensures right-to-left movement
      >
        {allLogo.map((logo, index) => (
          <div 
            className="flex justify-center items-center mx-12" // ✅ added spacing
            key={index}
          >
            <img 
              src={logo} 
              alt={`client-logo-${index}`} 
              className="h-6 md:h-6 w-auto object-contain" // ✅ responsive size
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogoMarquee;
