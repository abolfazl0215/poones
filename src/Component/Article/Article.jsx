import React, { memo} from "react";
import { useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

const Article = (props) => {
  const location = useLocation();
  
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setLoading(false)
    },500)
  };

  return (
    <div className="md:pt-24 pt-10">
      {location.pathname === "/" ? (
        <div className="text-center">
          <h1 className="inline-block py-2 px-8 rounded-3xl text-white bg-indigo-600 font-bold md:text-xl">
            آخرین مقالات
          </h1>
          <hr style={{ height: "1.9px" }} className="bg-indigo-600 -mt-5" />
        </div>
      ) : (
        ""
      )}
      <div className="p-5 md:px-20 mt-4 md:flex relative flex-wrap md:justify-start">
          
        <div onClick={handleOpen} className="sm:w-full pb-4 md:p-4 cursor-pointer mt-5 md:w-1/3 sm:text-sm text-small relative">
            <div className="shadow-lg rounded overflow-hidden">
            <img className="w-full" src="/image/roadMap.jpg" alt="roadMap"/>
              <h1 className="p-4 text-gray-600 font-bold text-center">
                نقشه راه طراحی وب
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
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                bgcolor: "background.paper",
                position: "relative",
                top: "7%",
                height:"80vh",
                width:"80%",
                marginRight: "10%",
                p: 1,
                borderRadius: "5px",
              }}
            >
              {!loading ? (
                <p className="mt-8 text-center fixed right-0 w-full">
                  اگه نمیاره فندق شکنتو خاموش کن
                </p>
              ):""}
                <iframe
                title="معرفی دوره"
                className="w-full h-full rounded"
                src="https://www.aparat.com/video/video/embed/videohash/CLrgf/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                onLoad={()=>setLoading(true)}
              ></iframe>
              
            </Box>
          </Fade>
        </Modal>
        <div onClick={handleOpen} className="sm:w-full pb-4 md:p-4 cursor-pointer mt-5 md:w-1/3 sm:text-sm text-small relative">
            <div className="shadow-lg rounded overflow-hidden">
            <img className="w-full" src="/image/roadMap.jpg" alt="roadMap"/>
              <h1 className="p-4 text-gray-600 font-bold text-center">
                نقشه راه طراحی وب
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
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                bgcolor: "background.paper",
                position: "relative",
                top: "7%",
                height:"80vh",
                width:"80%",
                marginRight: "10%",
                p: 1,
                borderRadius: "5px",
              }}
            >
              {!loading ? (
                <p className="mt-8 text-center fixed right-0 w-full">
                  اگه نمیاره فندق شکنتو خاموش کن
                </p>
              ):""}
                <iframe
                title="معرفی دوره"
                className="w-full h-full rounded"
                src="https://www.aparat.com/video/video/embed/videohash/CLrgf/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                onLoad={()=>setLoading(true)}
              ></iframe>
              
            </Box>
          </Fade>
        </Modal>
        <div onClick={handleOpen} className="sm:w-full pb-4 md:p-4 cursor-pointer mt-5 md:w-1/3 sm:text-sm text-small relative">
            <div className="shadow-lg rounded overflow-hidden">
            <img className="w-full" src="/image/roadMap.jpg" alt="roadMap"/>
              <h1 className="p-4 text-gray-600 font-bold text-center">
                نقشه راه طراحی وب
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
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                bgcolor: "background.paper",
                position: "relative",
                top: "7%",
                height:"80vh",
                width:"80%",
                marginRight: "10%",
                p: 1,
                borderRadius: "5px",
              }}
            >
              {!loading ? (
                <p className="mt-8 text-center fixed right-0 w-full">
                  اگه نمیاره فندق شکنتو خاموش کن
                </p>
              ):""}
                <iframe
                title="معرفی دوره"
                className="w-full h-full rounded"
                src="https://www.aparat.com/video/video/embed/videohash/CLrgf/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                onLoad={()=>setLoading(true)}
              ></iframe>
              
            </Box>
          </Fade>
        </Modal>
        
        
      </div>
    </div>
  );
};

export default memo(Article);
