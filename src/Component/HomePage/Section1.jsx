import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Lottie from "react-lottie-player";
import Backdrop from "@mui/material/Backdrop";
import web from "./web1.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import location from "./iconsJson/location.json";

const Section1 = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div className="section1  pb-24 pt-8 -mt-1 rounded-br-3xl rounded-bl-3xl md:pt-28 relative">
      <div className="md:flex">
        <div className="w-2/3 m-auto md:w-1/4 relative">
          <img
            src={web}
            id="sonEarth"
            className="w-full"
            alt="logo"
            loading="lazy"
          />

          <div id="earthMap"></div>
        </div>
        <div className="md:mx-auto md:my-auto ">
          <h1
            id="text-main"
            className="text-lg text-center mt-5 md:text-2xl text-indigo-100 font-yekan font-bold">
            آموزشگاه آنلاین{" "}
            <span id="pounes-text " className="text-amber-300">
              پونس
            </span>
          </h1>
          <p className=" text-fix-color text-center text-indigo-200 mt-3  text-sm tracking-wider font-yekan">
            از صفر تا ورود به بازار کار با شما هستم
          </p>
          <p
            onClick={handleOpen}
            className="text-fix-color text-center text-indigo-100 mt-4">
            <button
              style={{ backgroundColor: "#3c5694" }}
              className="help-button text-sm relative items-center font-yekan rounded-xl shadow-lg p-2 px-6 py-3 hover:bg-indigo-600 transition-all hover:text-white select-none font-yekan tracking-wider">
              راهنمای تازه کارها{" "}
            </button>
          </p>
        </div>{" "}
      </div>

      <div className="absolute w-full -bottom-3.5 text-center select-none">
        <a href="#bottom">
          <div className="rounded-full transition-all cursor-pointer mx-auto inline-block">
            <div className="radiuser h-12 flex justify-center inline-block w-40  rounded-full p-2">
              <MdKeyboardArrowDown className="text-2xl arrow-bottom" />
            </div>
          </div>
        </a>
      </div>
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
              position: "relative",
              top: "7%",
              height: "80vh",
              width: "80%",
              marginRight: "10%",
              p: 1,
              borderRadius: "5px",
            }}>
            {!loading ? (
              <p className="mt-8 text-center fixed right-0 w-full">
                اگه نمیاره فندق شکنتو خاموش کن
              </p>
            ) : (
              ""
            )}
            <iframe
              className="w-full h-full rounded"
              src="https://www.aparat.com/video/video/embed/videohash/j9ynK/vt/frame?recom=none"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              onLoad={() => setLoading(true)}></iframe>
          </Box>
        </Fade>
      </Modal>
      <div id="bottom"></div>
    </div>
  );
};

export default Section1;
