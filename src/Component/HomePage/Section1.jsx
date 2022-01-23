import React from "react";
import web from "./web.png";
import "./index.css"; 

const Section1 = () => {
  return (
    <div className="pt-24 pb-20 rounded-br-3xl rounded-bl-3xl border-b-2 md:pt-28 bg-gray-100 relative">
      <div className="md:flex">
        <div className="w-2/3 m-auto md:w-1/4 relative">
          <img src={web} className="w-full" alt="logo" loop />
          <div id="earth"></div>
        </div>
        <div className="md:mx-auto md:my-auto ">
          <h1 className="text-xl text-center mt-5 md:text-3xl text-gray-500 font-bold">
            آموزشگاه آنلاین{" "}
            <span className="text-amber-500">پونس</span>
          </h1>
          <p
            style={{ fontSize: "16px" }}
            className="text-center text-gray-500 mt-3 tracking-wider"
          >
            از صفر تا ورود به بازار کار با شما هستیم
          </p>
          <p className="text-center text-indigo-600 mt-4"><button className="rounded-xl shadow-lg p-2 px-4 hover:bg-indigo-600 hover:text-white border-l-2 border-r-2 select-none font-bold tracking-wider">راهنمای تازه کارها</button></p>
        </div>{" "}
      </div>
       
      <div className="absolute w-full -bottom-8  text-center">
        <a href="#bottom">
          <div className="rounded-full cursor-pointer border-2 bg-white bg-gray-100 mx-auto inline-block">
            <div className="bg-white w-full h-full rounded-full p-2">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f46e5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            >
              <path d="M12 5v13M5 12l7 7 7-7" />
            </svg>
            </div>
          </div>
        </a>
      </div>
      <div id="bottom"></div>
    </div>
  );
};

export default Section1;
