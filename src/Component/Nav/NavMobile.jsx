import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SlideToggle from "react-slide-toggle";
import Modal from "react-modal";
import Context from "../../Context/Context";
import CartContext from "./../../Context/CartContext";

const NavMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  const context = useContext(Context);
  const cartContext = useContext(CartContext);

  return (
    <div className=" md-hidden  ">
      <div className="w-full py-2 bg-white fixed shadow-2xl flex  justify-between md-hidden">
        <div className="flex">
          <SlideToggle
            collapsed="true"
            render={({ toggle, setCollapsibleElement }) => (
              <div>
                {/* menu icon */}
                {!showMenu ? (
                  <div onClick={toggle}>
                    <svg
                      style={{ marginTop: "10px" }}
                      className="m-2 mr-3 cursor-pointer"
                      onClick={handleShowMenu}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5d3fd3"
                      stroke-width="1.5"
                      stroke-linecap="butt"
                      stroke-linejoin="round"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </div>
                ) : (
                  <div onClick={toggle}>
                    <svg
                      id="menuClose"
                      style={{ marginTop: "10px" }}
                      className="m-2 mr-3 cursor-pointer"
                      onClick={handleShowMenu}
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5d3fd3"
                      strokeWidth="1.5"
                      strokeLinecap="butt"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                )}
                {/* end menu icon */}

                {/* menu collapse */}
                <div
                  ref={setCollapsibleElement}
                  style={{ zIndex: "999" }}
                  id="menu-collapse"
                  className="w-full fixed bg-white md:hidden"
                >
                  <ul className="p-4 leading-10 text-sm font-bold text-gray-500">
                    <li>
                      <Link to="/">خانه</Link>
                    </li>
                    <li>
                      <Link to="/courses">دوره های آموزشی</Link>
                    </li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                  </ul>
                </div>
                {/* end menu collapse */}
              </div>
            )}
          />
          {/* logo pooNes */}
          <img
            src="image/poones.png"
            className="w-7 h-7 mt-2 mr-2 cursor-pointer"
            alt="logo"
          />
          {/* end logo pooNes */}
        </div>
        <div className="flex px-1">
          {/* icon shoppingCart */}
          <div className="relative">
            <Link to="/cart">
              <span className="h-5 w-5 font-bold font-sm -pt-1 rounded-3xl bg-red-500 text-white text-center  absolute right-6">
                {cartContext.cartShop ? cartContext.cartShop.length : "0"}
              </span>
              <svg
                className="m-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5d3fd3"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="round"
              >
                <circle cx="10" cy="20.5" r="1" />
                <circle cx="18" cy="20.5" r="1" />
                <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
              </svg>
            </Link>
          </div>
          {/* end icon shoppingCart */}

          {/* avatar user */}

          {context.getStorage ? (
            <svg
              onClick={context.openModal}
              className="m-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5d3fd3"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="round"
            >
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
              <circle cx="12" cy="10" r="3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          ) : (
            <Link to="/login">
              <svg
                className="m-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5d3fd3"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="round"
              >
                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                <circle cx="12" cy="10" r="3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Link>
          )}

          {/* end avatar user */}
        </div>
      </div>
      {/* modal */}
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(68, 68, 68, 0.400)",
          },
        }}
        isOpen={context.modalIsOpen}
        onRequestClose={context.closeModal}
        className="fixed top-12 left-8 p-4 text-sm bg-white rounded border-0 select-none"
        contentLabel="Example Modal"
      >
        <p className="p-2 cursor-pointer">{localStorage.getItem("fullName")}</p>
        <hr />
        <p onClick={context.handleLogout} className="p-2 cursor-pointer">
          خروج از حساب کاربری
        </p>
      </Modal>
      {/* end modal */}
    </div>
  );
};

export default NavMobile;
