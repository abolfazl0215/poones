import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import CartContext from "../../../Context/CartContext";
import courses from "./Courses.json";

const AllCourse = () => {
  const location = useLocation();
  const cartContext = useContext(CartContext);
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{ width: "96%", marginRight: "2%" }}
      className="inline-block  mt-8 pb-12 rounded-3xl   ">
      {location.pathname === "/courses" ? (
        <Helmet>
          <meta charSet="utf-8" />
          <title>دوره های آموزشی پونس</title>
          <link rel="canonical" href="https://pounes.ir" />
        </Helmet>
      ) : (
        ""
      )}
      {location.pathname === "/" ? (
        <div className="text-center">
          <h1 className="courses-title text-indigo-600 relative -top-5 px-32   inline-block py-2 rounded-3xl  font-bold md:text-lg  ">
            دوره های پونس
          </h1>
        </div>
      ) : (
        ""
      )}
      <div className="px-5 py-2 w-full md:px-20 mt-4 md:flex flex-wrap md:justify-start">
        {courses.map((p) => (
          <div
            onClick={() => cartContext.goToCourse(p.id)}
            className="sm:w-full md:p-4 mt-5  md:w-1/3 sm:text-sm text-small ">
            <div className="box-dark pb-4 shadow-lg overflow-hidden hover:shadow-xl rounded-3xl transition bg-white">
              <Link to="/singleCourse" className="p-0">
                <img
                  className="w-full"
                  src={p.image_url1}
                  alt="course"
                  loading="lazy"
                />
                <h2 className="p-4 text-gray-600 font-bold">
                  {p.name}
                </h2>
                <div className="flex pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b5b5b5"
                    stroke-width="1.5"
                    stroke-linecap="butt"
                    stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <p className="pr-2 text-gray-500"> مختاری</p>
                </div>
                <div className="flex pr-4 pl-4 mt-3 justify-between">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9966ff"
                      stroke-width="1.5"
                      stroke-linecap="butt"
                      stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p className="pr-2 text-color">{p.time}</p>
                  </div>
                  <div>
                    <div className="text-green-500">
                      <s className="mx-auto text-sm text-gray-400">
                        {`${p.discount}`}
                      </s>
                      <span className="font-bold"> {p.price} </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
