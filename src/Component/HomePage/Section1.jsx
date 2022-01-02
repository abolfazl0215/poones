import React from "react";
import web from "./web.png";
import "./index.css";
const Section1 = () => {
  return (
    <div className="pt-24 pb-20 rounded-br-3xl rounded-bl-3xl  md:pt-28 bg-gray-100 relative">
      <div className="md:flex">
        <div className="w-2/3 m-auto md:w-1/4 relative">
          <img src={web} className="w-full" alt="logo" loop />
          <div id="earth"></div>
        </div>
        <div className="md:mx-auto md:my-auto ">
          <h1 className="text-xl text-center mt-5 md:text-3xl md:font-extrabold">
            آموزشگاه آنلاین{" "}
            <span style={{ color: "#ffbb00", fontWeight: "900" }}>پونس</span>
          </h1>
          <p
            style={{ fontSize: "16px" }}
            className="text-center text-gray-700 mt-3"
          >
            از صفر تا ورود به بازار کار با شما هستیم
          </p>
        </div>{" "}
      </div>
      {/* <svg
        className="mt-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,256L30,261.3C60,267,120,277,180,234.7C240,192,300,96,360,80C420,64,480,128,540,144C600,160,660,128,720,106.7C780,85,840,75,900,112C960,149,1020,235,1080,256C1140,277,1200,235,1260,192C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg> */}
      <div className="absolute w-full -bottom-8  text-center">
        <a href="#bottom">
          <div className="rounded-full cursor-pointer p-2 bg-white border-4 border-gray-100 mx-auto inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5d3fd3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            >
              <path d="M12 5v13M5 12l7 7 7-7" />
            </svg>
          </div>
        </a>
      </div>
      <div id="bottom"></div>
    </div>
  );
};

export default Section1;
