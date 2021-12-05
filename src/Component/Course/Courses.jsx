import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Courses = ({ location }) => {
  return (
    <div className="inline-block md:pt-24 pt-10">
      {location.pathname === "/" ? (
        <div className="text-center">
          <h1 className="inline-block py-2 px-4 rounded-3xl text-white bg-gradient font-bold md:text-xl">
            دوره های برتر پونس
          </h1>
          <hr style={{ height: "1.9px" }} className="bg-purple-400 -mt-5" />
        </div>
      ) : (
        ""
      )}
      <div className="p-5 mt-4 md:flex md:justify-between">
        <div className="sm:w-full pb-4 course-shadow mt-5 md:m-3 md:w-30/100 sm:text-sm text-small">
          <Link to="/singleCourse">
            <img src="image/html.jpg" alt="course" />
            <h1 className="p-4 text-gray-600">
              دوره <span className="text-color">HTML</span> و{" "}
              <span className="text-color">CSS</span> مقدماتی تا پیشرفته
            </h1>
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
                stroke-linejoin="round"
              >
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
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p className="pr-2 text-color">30:21:34</p>
              </div>
              <div>
                <p className="text-orange">رایگان</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:w-full pb-4 course-shadow mt-5 md:m-3 md:w-30/100 sm:text-sm text-small">
          <Link to="/singleCourse">
            <img src="image/html.jpg" alt="course" />
            <h1 className="p-4 text-gray-600">
              دوره <span className="text-color">HTML</span> و{" "}
              <span className="text-color">CSS</span> مقدماتی تا پیشرفته
            </h1>
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
                stroke-linejoin="round"
              >
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
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p className="pr-2 text-color">30:21:34</p>
              </div>
              <div>
                <p className="text-orange">رایگان</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="sm:w-full pb-4 course-shadow mt-5 md:m-3 md:w-30/100 sm:text-sm text-small">
          <Link to="/singleCourse">
            <img src="image/html.jpg" alt="course" />
            <h1 className="p-4 text-gray-600">
              دوره <span className="text-color">HTML</span> و{" "}
              <span className="text-color">CSS</span> مقدماتی تا پیشرفته
            </h1>
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
                stroke-linejoin="round"
              >
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
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <p className="pr-2 text-color">30:21:34</p>
              </div>
              <div>
                <p className="text-orange">رایگان</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Courses);
