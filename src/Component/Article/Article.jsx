import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

const Article = (props) => {
  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState();
  const handleOpen = (x) => {
    setId(x);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div
      style={{ width: "96%", marginRight: "2%" }}
      className="mt-24 pb-12 bg-indigo-900 rounded-3xl">
      {location.pathname === "/" ? (
        <div className="text-center">
          <h1 className="courses-title text-indigo-600 relative -top-5 px-24 pt-6  inline-block py-2 rounded-3xl  font-bold md:text-lg  ">
            آخرین مقالات
          </h1>
        </div>
      ) : (
        ""
      )}
      <div className="px-5 py-4 pt-8 md:px-20 mt-3 md:flex relative flex-wrap md:justify-start ">
        <div
          onClick={() => handleOpen(1)}
          className="sm:w-full pb-4 md:p-4 cursor-pointer mt-1 md:w-1/3 sm:text-sm text-small relative">
          <div className="box-dark shadow-lg rounded overflow-hidden hover:shadow-xl bg-white rounded-3xl transition">
            <img
              className="w-full"
              src="/image/roadMap.svg"
              alt="roadMap"
              loading="lazy"
            />
            <h1 className="p-4 text-gray-600 font-bold text-center">
              نقشه راه طراحی وب
            </h1>
          </div>
        </div>
        <div
          onClick={() => handleOpen(2)}
          className="sm:w-full pb-4 md:p-4 cursor-pointer mt-1 md:w-1/3 sm:text-sm text-small relative">
          <div className="box-dark shadow-lg rounded overflow-hidden hover:shadow-xl bg-white rounded-3xl transition">
            <img
              className="w-full"
              src="/image/ui.svg"
              alt="roadMap"
              loading="lazy"
            />
            <h1 className="p-4 text-gray-600 font-bold text-center">
              ui و ux چی هستن ؟
            </h1>
          </div>
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
              {id == 1 ? (
                <iframe
                  title="مسیر راه فرانت اند"
                  src="https://www.aparat.com/video/video/embed/videohash/Ocp3D/vt/frame?recom=none"
                  className="w-full h-full rounded"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  onLoad={() => setLoading(true)}></iframe>
              ) : (
                <iframe
                  title="مسیر راه فرانت اند"
                  src="https://www.aparat.com/video/video/embed/videohash/S7FPo/vt/frame"
                  className="w-full h-full rounded"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  onLoad={() => setLoading(true)}></iframe>
              )}
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default memo(Article);
