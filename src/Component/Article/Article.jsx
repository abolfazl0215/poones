import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "./../../Context/CartContext";

const Article = () => {
  const location = useLocation();
  const cartContext = useContext(CartContext);
  return (
    <div className="md:pt-24 pt-10">
      {location.pathname === "/" ? (
        <div className="text-center">
          <h1 className="inline-block py-2 px-4 rounded-3xl text-white bg-color font-bold md:text-xl">
            آخرین مقالات
          </h1>
          <hr style={{ height: "1.9px" }} className="bg-color -mt-5" />
        </div>
      ) : (
        ""
      )}
      <div className="p-5 mt-4 md:flex md:justify-between">
        {cartContext.courses.map((p) => (
          <div className="sm:w-full pb-4  course-shadow mt-5 md:m-3 md:w-30/100 sm:text-sm text-small relative">
            <video
              className="video-js vjs-fluid w-full"
              controls
              data-setup={{}}
              //   poster="image/roadMap.jpg"
            >
              <source src="image/main4.mp4" />
            </video>
            <h1 className="p-4 text-gray-600 font-bold text-center">
              نقشه راه طراحی وب
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
