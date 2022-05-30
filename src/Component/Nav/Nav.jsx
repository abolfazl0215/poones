import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { makeStyles } from "@mui/styles";
import SlideToggle from "react-slide-toggle";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CartContext from "./../../Context/CartContext";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Link, useLocation } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import jwt from "jsonwebtoken";
import Context from "../../Context/Context";

const useStyles = makeStyles({
  bgWhite: {
    backgroundColor: "#182848 !important",
    color: "black !important",
    boxShadow: "0px 0px 0px #afafaf !important",
    width: "96% !important",
    // marginRight: "2.03% !important",
    marginTop: "1rem",
    borderRadius: "1.5rem 1.5rem 0 0",
    position: "relative !important",
  },
  bgWhite2: {
    backgroundColor: "white !important",
    color: "black !important",
    boxShadow: "0px 0px 80px #afafaf !important",
  },
});

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [darkmode, setDarkmode] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  const cartContext = useContext(CartContext);
  const context = useContext(Context);

  const location = useLocation();

  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      if (mode == "light") {
        setDarkmode(false);
        light();
      } else {
        setDarkmode(true);
        dark();
      }
    }
  }, []);

  const light = () => {
    document.querySelector("#darkmode").removeAttribute("href");
    localStorage.setItem("mode", "light");
    setDarkmode(false);
  };
  const dark = () => {
    document
      .querySelector("#darkmode")
      .setAttribute("href", "/css/darkmode.css");
    localStorage.setItem("mode", "dark");
    setDarkmode(true);
  };

  return (
    <div className="navbar font-yekan h-16 ">
      {location.pathname === "/" ? (
        <Box sx={{ flexGrow: "1" }}>
          <AppBar
            sx={{ py: 0.5, mx: "2.05%" }}
            className={
              !darkmode ? `${classes.bgWhite}` : "nav-color"
            }>
            <Container sx={{ p: "0" }}>
              <Toolbar sx={{ p: "0" }}>
                {/* menu humbereger collapse  */}
                <SlideToggle
                  collapsed="true"
                  render={({ toggle, setCollapsibleElement }) => (
                    <IconButton
                      sx={{
                        display: { md: "none" },
                        color: `${darkmode ? "#121830" : "#e0e7ff"}`,
                      }}>
                      {showMenu ? (
                        <div
                          className="pr-1.5"
                          onClick={handleShowMenu}>
                          <ArrowCircleUpIcon
                            sx={{
                              fontSize: "1.3em",
                            }}
                            onClick={toggle}
                          />
                        </div>
                      ) : (
                        <div
                          className="pr-1.5"
                          onClick={handleShowMenu}>
                          <MenuIcon
                            sx={{ fontSize: "1.2em" }}
                            onClick={toggle}
                          />
                        </div>
                      )}
                      {/* menu collapse */}
                      <div
                        ref={setCollapsibleElement}
                        style={{ zIndex: "999", width: "100vw" }}
                        id="menu-collapse"
                        className="mt-2 absolute -right-2 top-16 text-right   lg:hidden">
                        <ul
                          style={{
                            background:
                              "linear-gradient(to bottom, #182848, #3c5694)",
                            margin: "auto 2%",
                            paddingTop: "10px",
                          }}
                          className="p-4 pt-0 leading-10 text-sm text-indigo-200">
                          <Link to="/">
                            <li
                              className=""
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <p className="inline font-yekan">
                                <BiHomeHeart className="inline mr-1 ml-2 text-lg text-red-500" />
                                خانه{" "}
                              </p>
                            </li>
                          </Link>
                          <Link to="/courses">
                            <li
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <p className="inline font-yekan">
                                <CgMenuRight className="inline mr-1 ml-2 text-lg text-green-500" />
                                دوره های آموزشی
                              </p>
                            </li>
                          </Link>
                          <a href="#footer">
                            <li
                              className="font-yekan "
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <AiOutlineQuestionCircle className="inline mr-1 ml-2 text-lg text-blue-500" />
                              درباره من
                            </li>
                          </a>
                          <a href="#footer">
                            <li
                              className="font-yekan"
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <VscCallIncoming className="inline mr-1 ml-2 text-lg text-pink-500" />
                              تماس با من
                            </li>
                          </a>
                        </ul>
                      </div>
                      {/* end menu collapse */}
                    </IconButton>
                  )}
                />
                {/* end menu humbereger collapse  */}
                <picture>
                  <source srcSet="/image/pounes.svg" />
                  <img
                    className="w-7 h-7 mr-2 cursor-pointer"
                    src="/image/pounes.svg"
                    alt="logo"
                  />
                </picture>
                <Box
                  sx={{
                    mr: 2,
                    fontSize: "16px",
                    display: { xs: "none", md: "flex" },
                  }}>
                  <p className="my-auto mr-3 cursor-pointer">
                    <Link to="/">
                      <p className="text-fix-color text-indigo-100 hover:bg-indigo-600 hover:text-white transition-all p-2 px-4 rounded cursor-pointer text-sm font-yekan">
                        خانه
                      </p>
                    </Link>
                  </p>
                  <p className="my-auto mr-3 cursor-pointer">
                    <Link to="/courses">
                      <p className="text-fix-color text-indigo-100 hover:bg-indigo-600 hover:text-white transition-all p-2 px-4 rounded cursor-pointer text-sm font-yekan">
                        {" "}
                        دوره های آموزشی{" "}
                      </p>
                    </Link>
                  </p>
                  <a href="#footer">
                    <p className="text-fix-color text-indigo-100 my-auto mr-3 hover:bg-indigo-600 hover:text-white transition-all p-2 px-4 rounded cursor-pointer text-sm font-yekan">
                      درباره من
                    </p>
                  </a>
                </Box>
                <Box sx={{ flexGrow: "1" }} />
                {/* icon dark mode */}
                <IconButton
                  onClick={!darkmode ? () => dark() : () => light()}
                  sx={{
                    ml: { xs: 1, md: 4 },
                    color: `${darkmode ? "#121830" : "#e0e7ff"}`,
                    fontSize: "1.1em",
                  }}>
                  {darkmode ? (
                    <BsSunFill className="text-2xl" />
                  ) : (
                    <BsMoonStarsFill />
                  )}
                </IconButton>
                {/* end icon dark mode */}
                {/* icon shopping cart */}
                <IconButton
                  sx={{
                    ml: { xs: 1, md: 4 },
                    color: `${darkmode ? "#121830" : "#e0e7ff"}`,
                    fontSize: "0.90em",
                  }}>
                  <Link to="/cart">
                    <span className="h-5 w-5 font-bold font-xs -pt-1 rounded-3xl bg-red-500 text-white text-center  absolute right-6 -top-1">
                      {cartContext.cartLength}
                    </span>

                    <ShoppingCartOutlinedIcon
                      sx={{ fontWeight: "100", fontSize: "1.8em" }}
                    />
                  </Link>
                </IconButton>
                {/* end icon shopping cart */}
                {/* icon account profile */}
                <IconButton
                  sx={{
                    ml: 1,
                    color: `${darkmode ? "#121830" : "#e0e7ff"}`,
                  }}>
                  <Link to={context.token ? "" : "/login"}>
                    <AccountCircleOutlinedIcon
                      onClick={
                        localStorage.getItem("token")
                          ? handleOpen
                          : null
                      }
                      sx={{ fontSize: "1.2em" }}
                    />
                  </Link>
                </IconButton>
                {/* end icon account profile */}
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ flexGrow: "1" }}>
          <AppBar sx={{ p: 0, py: 0.5 }} className={classes.bgWhite2}>
            <Container sx={{ p: "0" }} maxWidth="xl">
              <Toolbar sx={{ p: "0" }}>
                {/* menu humbereger collapse  */}
                <SlideToggle
                  collapsed="true"
                  render={({ toggle, setCollapsibleElement }) => (
                    <IconButton
                      sx={{
                        display: { md: "none" },
                        mr: 1,
                        color: "#4f46e5",
                      }}>
                      {showMenu ? (
                        <div onClick={handleShowMenu}>
                          <ArrowCircleUpIcon
                            sx={{ fontSize: "1.2em" }}
                            onClick={toggle}
                          />
                        </div>
                      ) : (
                        <div onClick={handleShowMenu}>
                          <MenuIcon
                            sx={{ fontSize: "1.2em" }}
                            onClick={toggle}
                          />
                        </div>
                      )}
                      {/* menu collapse */}
                      <div
                        ref={setCollapsibleElement}
                        style={{ zIndex: "999" }}
                        id="menu-collapse"
                        className="w-full fixed right-0 top-16 text-right bg-white shadow-xl lg:hidden">
                        <ul className="p-4 pt-0 leading-10 text-sm text-indigo-800">
                          <Link to="/">
                            <li
                              className="bg-gray-50"
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <p className="inline font-yekan">
                                <BiHomeHeart className="inline mr-1 ml-2 text-lg text-red-500" />
                                خانه{" "}
                              </p>
                            </li>
                          </Link>
                          <Link to="/courses">
                            <li
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <p className="inline font-yekan">
                                <CgMenuRight className="inline mr-1 ml-2 text-lg text-green-500" />
                                دوره های آموزشی
                              </p>
                            </li>
                          </Link>
                          <a href="#footer">
                            <li
                              className="font-yekan bg-gray-50"
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <AiOutlineQuestionCircle className="inline mr-1 ml-2 text-lg text-blue-500" />
                              درباره من
                            </li>
                          </a>
                          <a href="#footer">
                            <li
                              className="font-yekan"
                              onClick={() => {
                                toggle();
                                handleShowMenu();
                              }}>
                              <VscCallIncoming className="inline mr-1 ml-2 text-lg text-pink-500" />
                              تماس با من
                            </li>
                          </a>
                        </ul>
                      </div>
                      {/* end menu collapse */}
                    </IconButton>
                  )}
                />
                {/* end menu humbereger collapse  */}
                <picture>
                  <source srcSet="/image/pounes.svg" />
                  <img
                    className="w-7 h-7 mr-2 cursor-pointer"
                    src="/image/pounes.svg"
                    alt="logo"
                  />
                </picture>
                <Box
                  sx={{
                    mr: 2,
                    fontSize: "16px",
                    display: { xs: "none", md: "flex" },
                  }}>
                  <p className="my-auto mr-3 cursor-pointer">
                    <Link to="/">
                      <p className=" hover:bg-indigo-600 hover:text-white transition-all p-2 px-4 rounded cursor-pointer text-sm font-yekan">
                        خانه
                      </p>
                    </Link>
                  </p>
                  <p className="my-auto mr-3 cursor-pointer">
                    <Link to="/courses">
                      <p className=" hover:bg-indigo-600 hover:text-white transition-all p-2 px-4 rounded cursor-pointer text-sm font-yekan">
                        {" "}
                        دوره های آموزشی{" "}
                      </p>
                    </Link>
                  </p>
                  <a href="#footer">
                    <p className="my-auto mr-3 hover:bg-indigo-600 hover:text-white transition-all p-2 px-4 rounded cursor-pointer text-sm font-yekan">
                      درباره من
                    </p>
                  </a>
                </Box>
                <Box sx={{ flexGrow: "1" }} />
                {/* icon dark mode */}
                <IconButton
                  onClick={!darkmode ? () => dark() : () => light()}
                  sx={{
                    ml: { xs: 1, md: 4 },
                    color: "#4f46e5",
                    fontSize: "1.1em",
                  }}>
                  {darkmode ? (
                    <BsSunFill className="text-2xl" />
                  ) : (
                    <BsMoonStarsFill />
                  )}
                </IconButton>
                {/* end icon dark mode */}
                {/* icon shopping cart */}
                <IconButton
                  sx={{
                    ml: { xs: 1, md: 4 },
                    color: "#4f46e5",
                    fontSize: "0.90em",
                  }}>
                  <Link to="/cart">
                    <span className="h-5 w-5 font-bold font-xs -pt-1 rounded-3xl bg-red-500 text-white text-center  absolute right-6 -top-1">
                      {cartContext.cartLength
                        ? cartContext.cartLength
                        : "0"}
                    </span>

                    <ShoppingCartOutlinedIcon
                      sx={{ fontWeight: "100", fontSize: "1.8em" }}
                    />
                  </Link>
                </IconButton>
                {/* end icon shopping cart */}
                {/* icon account profile */}
                <IconButton sx={{ ml: 1, color: "#4f46e5" }}>
                  <Link to={context.token ? "" : "/login"}>
                    <AccountCircleOutlinedIcon
                      onClick={
                        localStorage.getItem("token")
                          ? handleOpen
                          : null
                      }
                      sx={{ fontSize: "1.2em" }}
                    />
                  </Link>
                </IconButton>
                {/* end icon account profile */}
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      )}
      {/* modal for profile */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <Box
              sx={{
                bgcolor: "background.paper",
                position: "absolute",
                top: "8%",
                left: "7%",
                p: 1,
                borderRadius: "5px",
              }}>
              <p className="p-2 cursor-pointer">
                {localStorage.getItem("token")
                  ? jwt.decode(localStorage.getItem("token")).user
                      .fullName
                  : ""}
              </p>
              <hr />
              <p
                onClick={() => {
                  handleLogout();
                  handleClose();
                  context.setToken(false);
                }}
                className="p-2 cursor-pointer">
                خروج از حساب کاربری
              </p>
            </Box>
          </Fade>
        </Modal>
      </div>
      {/* end modal for profile */}
    </div>
  );
}
