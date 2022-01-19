import React, { useContext, useState } from "react";
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
import Context from "./../../Context/Context";
import CartContext from "./../../Context/CartContext";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";


const useStyles = makeStyles({
  bgWhite: {
    backgroundColor: "white !important",
    color: "black !important",
    boxShadow: "0px 0px 80px #afafaf !important",
  },
});

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  const context = useContext(Context);
  const cartContext = useContext(CartContext);

  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("fullName");
    context.setStorage("");
  };

  return (
    <div>
      <Box sx={{ flexGrow: "1" }}>
        <AppBar sx={{ p: 0, py: 0.5 }} className={classes.bgWhite}>
          <Container sx={{ p: "0" }} maxWidth="xl">
            <Toolbar sx={{ p: "0" }}>
              <SlideToggle
                collapsed="true"
                render={({ toggle, setCollapsibleElement }) => (
                  <IconButton
                    sx={{ display: { md: "none" }, mr: 1, color: "#4f46e5" }}
                  >
                    {showMenu ? (
                      <div onClick={handleShowMenu}>
                        <ArrowCircleUpIcon
                          sx={{ fontSize: "1.2em" }}
                          onClick={toggle}
                        />
                      </div>
                    ) : (
                      <div onClick={handleShowMenu}>
                        <MenuIcon sx={{ fontSize: "1.2em" }} onClick={toggle} />
                      </div>
                    )}
                    {/* menu collapse */}
                    <div
                      ref={setCollapsibleElement}
                      style={{ zIndex: "999" }}
                      id="menu-collapse"
                      className="w-full fixed right-0 top-16 text-right bg-white shadow-xl md:hidden"
                    >
                      <ul className="p-4 pt-0 leading-10 text-sm font-bold text-gray-500">
                        <Link to="/">
                          <li onClick={() => { toggle(); handleShowMenu();}}>
                              <p className="inline"><BiHomeHeart className="inline mr-1 ml-2 text-lg"/>خانه </p>
                          </li>
                        </Link>
                        <Link to="/courses">
                          <li onClick={() => { toggle(); handleShowMenu();}}>
                              <p className="inline"><CgMenuRight className="inline mr-1 ml-2 text-lg"/>دوره های آموزشی</p>
                          </li>
                        </Link>
                        <li onClick={() => { toggle(); handleShowMenu();}}><AiOutlineQuestionCircle className="inline mr-1 ml-2 text-lg"/>درباره من</li>
                        <li onClick={() => { toggle(); handleShowMenu();}}><VscCallIncoming className="inline mr-1 ml-2 text-lg"/>تماس با من</li>
                      </ul>
                    </div>
                    {/* end menu collapse */}
                  </IconButton>
                )}
              />

              <img
                className="w-7 h-7 mr-2 cursor-pointer"
                src="image/poones.png"
                alt=""
              />
              <Box
                sx={{
                  mr: 2,
                  fontSize: "16px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <p className="my-auto mr-6 hover:text-yellow-500 cursor-pointer">
                  <Link to="/">
                    <p>خانه</p>
                  </Link>
                </p>
                <p className="my-auto mr-6 hover:text-yellow-500 cursor-pointer">
                  <Link to="/courses">
                    <p> دوره های آموزشی </p>
                  </Link>
                </p>
                <p className="my-auto mr-6 hover:text-yellow-500 cursor-pointer">
                  درباره من
                </p>
              </Box>
              <Box sx={{ flexGrow: "1" }} />
              <IconButton
                sx={{
                  ml: { xs: 1, md: 4 },
                  color: "#4f46e5",
                  fontSize: "0.90em",
                }}
              >
                <Link to="/cart">
                  <span className="h-5 w-5 font-bold font-xs -pt-1 rounded-3xl bg-red-500 text-white text-center  absolute right-6 -top-1">
                    {cartContext.cartShop ? cartContext.cartShop.length : "0"}
                  </span>

                  <ShoppingCartOutlinedIcon
                    sx={{ fontWeight: "100", fontSize: "1.8em" }}
                  />
                </Link>
              </IconButton>

              <IconButton sx={{ ml: 1, color: "#4f46e5" }}>
                <Link to={context.getStorage ? "" : "/login"}>
                  <AccountCircleOutlinedIcon
                    onClick={context.getStorage ? handleOpen : null}
                    sx={{ fontSize: "1.2em" }}
                  />
                </Link>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {/* modal */}
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
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                bgcolor: "background.paper",
                position: "absolute",
                top: "8%",
                left: "7%",
                p: 1,
                borderRadius: "5px",
              }}
            >
              <p className="p-2 cursor-pointer">
                {localStorage.getItem("fullName")}
              </p>
              <hr />
              <p onClick={() => { handleLogout();handleClose()}} className="p-2 cursor-pointer">
                خروج از حساب کاربری
              </p>
            </Box>
          </Fade>
        </Modal>
      </div>
      {/* end modal */}
    </div>
  );
}
