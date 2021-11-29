import React from "react";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";

const Nav = () => {
  return (
    <div>
      {/*start menu mobile */}
      <NavMobile />
      {/* end menu mobile */}
      {/* start menu pc */}
      <div className="w-full h-16 bg-white fixed shadow-2xl flex  justify-between sm-hidden">
        <div className="flex text-color text-lg">
          <img
            src="image/poones.png"
            className="w-6 h-6 my-auto mr-6 cursor-pointer"
            alt="logo"
          />
          <p className="my-auto mr-6 hover:text-yellow-500 cursor-pointer">
            <Link to="/">خانه</Link>
          </p>
          <p className="my-auto mr-6 hover:text-yellow-500 cursor-pointer">
            دوره های آموزشی{" "}
          </p>
          <p className="my-auto mr-6 hover:text-yellow-500 cursor-pointer">
            درباره من
          </p>
        </div>
        <div className="flex">
          <div className="hover:bg-gray-100 rounded-full p-4 my-auto ml-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9966ff"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
          </div>

          <div className="hover:bg-gray-100 rounded-full p-4 my-auto ml-6 cursor-pointer">
            <Link to="/register">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9966ff"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="round"
              >
                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                <circle cx="12" cy="10" r="3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* // end menu pc */}
    </div>
  );
};

export default Nav;
