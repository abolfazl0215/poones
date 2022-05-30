import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie-player";

import returned from "./iconsJson/return.json";
import support from "./iconsJson/support.json";
import quality from "./iconsJson/quality.json";
import performance from "./iconsJson/performance.json";

const Section2 = () => {
  return (
    <div className="mt-16 flex flex-wrap justify-around p-4 md:px-28 pb-12">
      <div className="box-dark w-48/100 section2-box py-6 m-3 p-2 shadow-md  md:shadow-none  mx-auto rounded-xl box-collapse md:w-1/5 cursor-pointer ">
        {/* animation icon support */}
        <div className="text-center w-full">
          <Lottie
            className="mx-auto w-10 md:w-12"
            loop
            animationData={support}
            play
            lazyLoad
          />
        </div>
        {/* end animation icon support */}
        <p className="text-center text-sm mt-2 text-gray-700">
          {" "}
          همراهی من
        </p>
        <p className="text-center text-gray-500 text-xs m-2">
          عین عقاب بالاسرتونم و حواسم بهتون هست
        </p>
      </div>

      <div className="box-dark w-48/100 section2-box py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-2xl  box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          {/* animation icon returned */}
          <div className="text-center w-full">
            <Lottie
              className="mx-auto w-10 md:w-12"
              loop
              animationData={returned}
              play
              lazyLoad
            />
          </div>
          {/* end animation icon returned */}
        </div>
        <p className="text-center text-sm mt-2 text-gray-700">
          {" "}
          تضمین بازگشت وجه{" "}
        </p>
        <p className="text-center text-gray-500 text-xs m-2">
          اگه از دوره ای خوشت نیومد درجا پول تو حسابته
        </p>
      </div>

      <div className="box-dark w-48/100 section2-box py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          {/* animation icon quality */}
          <div className="text-center w-full">
            <Lottie
              className="mx-auto w-10 md:w-12"
              loop
              animationData={quality}
              play
              lazyLoad
            />
          </div>
          {/* end animation icon quality */}
        </div>
        <p className="text-center text-sm mt-2 text-gray-700">
          {" "}
          تضمین کیفیت{" "}
        </p>
        <p className="text-center text-gray-500 text-xs m-2">
          تمام سعیم رو میکنم تا بهترین مطالب رو با بهترین کیفیت منتشر
          کنم
        </p>
      </div>

      <div className="box-dark w-48/100 section2-box py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          {/* animation icon performance */}
          <div className="text-center w-full">
            <Lottie
              className="mx-auto w-10 md:w-12"
              loop
              animationData={performance}
              play
              lazyLoad
            />
          </div>
          {/* end animation icon performance */}
        </div>
        <p className="text-center text-sm mt-2 text-gray-700">
          {" "}
          کاربردی
        </p>
        <p className="text-center text-gray-500 text-xs m-2">
          {" "}
          انجام پروژه های مختلف و اماده سازی شما عزیزان برای کسب درامد
        </p>
      </div>
    </div>
  );
};

export default Section2;
