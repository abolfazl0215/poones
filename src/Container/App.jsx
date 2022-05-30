import React, { Suspense, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AllCourse from "../Component/Course/AllCourse/AllCourse";
import SingleCourse from "../Component/Course/SingleCourse/SingleCourse";
import Register from "../Component/Register/Register";
import Login from "./../Component/Login/Login";
import Auth from "./../Component/Login/Auth";
import Cart from "../Component/Cart/Cart";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Component/HomePage/Home";
import RegisterCourse from "../Component/Register/RegisterCourse";
import toastr from "toastr";
import jwt from "jsonwebtoken";
import http from "../Services/httpService";
import cartContext from "../Context/CartContext";
import { Box } from "@mui/material";
import RoadMap from "../Component/RoadMap/RoadMap";
const App = () => {
  const context = useContext(cartContext);

  const [loading, setLoading] = React.useState(false);

  useEffect(async () => {
    if (localStorage.getItem("cart")) {
      const cartLength = JSON.parse(localStorage.getItem("cart"));
      context.setCartLength(cartLength.length);
    } else context.setCartLength(0);

    // const result = await axios(
    //   "https://www.zarinpal.com/pg/StartPay",
    // );
    const finded = window.location.href.split("&");
    if (finded[1] == "Status=OK") {
      toastr.success("به دوره خوش اومدی .");
      try {
        const token = localStorage.getItem("token");
        const userId = jwt.decode(token).user.userId;
        const { status, data } = await http.post(
          "https://api.pounes.ir/registerCourse",
          JSON.stringify({ course: "course2", userId }),
        );
        getUser();
      } catch (err) {
        console.log(err);
      }
    }
    if (finded[1] == "Status=NOK") toastr.error("مشکل در تراکنش");
  }, []);

  const getUser = async () => {
    try {
      const decode = jwt.decode(localStorage.getItem("token"));
      const userId = decode.user.userId;
      const { data } = await http.post(
        "https://api.pounes.ir/getUser",
        JSON.stringify({ userId }),
      );
      localStorage.setItem("token", data.token);
      localStorage.removeItem("cart");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Suspense
        fallback={
          <div className="mt-28 p-12 font-extrabold text-center bg-red-100">
            الان میاد ...
          </div>
        }>
        <MainLayout>
          <Routes>
            {/* <Route path="/roadmap" element={<RoadMap />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourse />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/singlecourse" element={<SingleCourse />} />
            <Route
              path="/registerCourse"
              element={<RegisterCourse />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/Access"
              element={
                <>
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
                        اگه نمیاره فیلتر شکنتو خاموش کن
                      </p>
                    ) : (
                      ""
                    )}
                    <iframe
                      className="w-full h-full rounded mt-4"
                      src="https://www.aparat.com/video/video/embed/videohash/ftNCl/vt/frame"
                      allowFullScreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      onLoad={() => setLoading(true)}></iframe>
                  </Box>
                </>
              }
            />
          </Routes>
        </MainLayout>
      </Suspense>
    </div>
  );
};

export default App;
