import React from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const isLogin = localStorage.getItem("fullName");
  return (
    <div>
      <div className="w-full pb-1 bg-white fixed shadow-2xl flex  justify-between md-hidden">
        <div className="flex">
          {/* menu icon */}
          <svg
            className="m-2 cursor-pointer"
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
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          {/* end menu icon */}

          {/* logo pooNes */}
          <img
            src="image/poones.png"
            className="w-4 h-4 mt-3 mr-2 cursor-pointer"
            alt="logo"
          />
          {/* end logo pooNes */}
        </div>
        {/* icon shoppingCart */}
        <div className="flex">
          <svg
            className="m-2 cursor-pointer"
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
          {/* end icon shoppingCart */}

          {/* avatar user */}

          <Link to="/login">
            <svg
              className="m-2 cursor-pointer"
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
          {/* end avatar user */}
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
