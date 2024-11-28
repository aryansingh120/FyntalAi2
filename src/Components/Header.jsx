import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateTransform = () => {
    const maxScroll = 400; 
    const tilt = Math.max(0, 20 - (scrollY / maxScroll) * 20); 
    return tilt;
  };

  let playIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[black]">
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="pt-[5rem]">
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]">
          <div className="border-[4px] border-[green] rounded-full mt-[3.5px]"></div>
          <span className="text-[#666666] font-medium">Unlock Future of Business with Fyntl AI</span>
        </div>
      </div>

      <p className="text-center text-[2rem] sm:text-[3rem] font-medium leading-[64.80px] mt-[.8rem]">
      AI powered <br /> Business OS for SME's
      </p>
      <p className="text-center px-[7vw] lg:px-[14vw] text-[1.1rem] sm:text-[1.3rem] font-medium text-[#666666] mt-[.5rem]"> A cutting-edge Generative AI-powered Operating System for MSMEs,integrating an extensive AI Marketplace with plug-and-play solutions,automated workflows, predictive   analytics, and personalized business insights to propel growth, efficiency, and innovation.
          
      </p>

      <div className="flex items-center pt-[2rem] flex-col gap-[1rem] sm:flex-row sm:justify-center">
        <button className="text-[#FFFFFF] capitalize bg-[black] text-[1.3rem] font-medium px-[2rem] py-[.5rem] rounded-md">
          start saving now
        </button>
        <button className="capitalize text-[1.2rem] font-medium px-[2rem] py-[.5rem] rounded-md flex items-center gap-[1rem]">
          {playIcon} <span className="capitalize">presentation</span>
        </button>
      </div>

      <div
        className="flex justify-center"
        style={{
          transform: `perspective(900px) rotateX(${calculateTransform()}deg)`, 
          transition: "transform 0.1s ease-out",
        }}
      >
        <img src="./Images/screen1.png" alt="Screen" className="w-[100%] max-w-[1250px]" />
      </div>
    </div>
  );
};

export default Header;
