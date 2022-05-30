import React, { useEffect, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toastr from "toastr";
import jwt from "jsonwebtoken";

// material ui
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

import Comments from "../Comments/Comments";
import Course from "../AllCourse/Courses.json";
import http from "../../../Services/httpService";
import sections from "./sections.json";
import sections2 from "./sections2.json";

import "../index.css";

const SingleCourse = () => {
  const [allowed, setAllowed] = useState(false);
  const [courseId, setCourseId] = useState();
  const [token, setToken] = useState();
  const [length, setLength] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(async () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Get Course Id
    const cId = await localStorage.getItem("singleCourse");
    setCourseId(cId);
    // End Get Courese Id

    // Get Token
    if (localStorage.getItem("token")) {
      const decode = await jwt.decode(localStorage.getItem("token"));
      setToken(decode);
      console.log("decodeeee", token);
      const isAllowed = decode.user.courses;
      const filterCourse = cId == 1 ? "course1" : "course2";
      const findCourse = isAllowed.filter((p) => p == filterCourse);
      if (findCourse.length > 0) {
        setAllowed(true);
      }
      console.log("ddddddddddddddddddddd", findCourse);
    }
    // End Get Token

    // GET Number of students
    try {
      const selectCourse = cId == 1 ? "course1" : "course2";
      const { data } = await http.post(
        "https://api.pounes.ir/getLength",
        JSON.stringify({ course: selectCourse }),
      );
      setLength(data.length);
    } catch (err) {
      console.log(err);
    }
    // End GET Number of students
  }, []);

  // handle open and close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end handle open and close modal

  // Course registration
  const goToCourse = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const userId = jwt.decode(token).user.userId;
        const { status, data } = await http.post(
          "https://api.pounes.ir/registerCourse",
          JSON.stringify({ course: "course1", userId }),
        );
        console.log(token);
        if (status === 201) {
          toastr.success("به دوره خوش اومدی .");
          setAllowed(true);
          const { data } = await http.post(
            "https://api.pounes.ir/getUser",
            JSON.stringify({ userId }),
          );
          localStorage.setItem("token", data.token);
        }
      } else {
        toastr.error("لطفا اول تو سایت ثبت نام کن");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // end Course registration

  // add to cart
  const addToCart = () => {
    if (localStorage.getItem("token")) {
      const cId = localStorage.getItem("singleCourse");
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        const findCart = cart.find((p) => p == cId);
        if (findCart) {
          toastr.warning("دوره در سبد خرید موجود است");
        } else {
          const arr = [];
          const prevCart = cart.map((p) => {
            arr.push(p);
          });
          arr.push(cId);
          localStorage.setItem("cart", JSON.stringify(arr));
          toastr.success("دوره موردنظر به سبدخرید شما اضافه شد");
        }
      } else {
        localStorage.setItem("cart", JSON.stringify([cId]));
        toastr.success("دوره موردنظر به سبدخرید شما اضافه شد");
      }
      navigate("/cart");
    } else {
      toastr.error("لطفا اول در سایت ثبت نام کن");
      navigate("/login");
    }
  };
  // end add to cart

  return (
    <div className="md:p-8 p-3 bg-indigo-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {courseId == 1
            ? "دوره هیولای طراحی سایت"
            : "دوره جاوااسکریپت"}
        </title>
        <link rel="canonical" href="https://pounes.ir" />
      </Helmet>
      {Course.filter((p) => p.id === parseInt(courseId)).map((e) => (
        <div>
          <h1 className="w-full text-center mt-2 font-bold text-indigo-600 font-yekan-bold text-lg rounded p-3 bg-white">
            {e.name}
          </h1>
          <div className="w-full flex justify-between mt-3 flex-wrap">
            <div className="md:w-1/5 w-full mt-3 md:mt-0 md:pl-3 order-2 md:order-1">
              <div className="  h-full text-gray-600 p-5 text-sm bg-white rounded">
                <p
                  style={{ borderBottom: "1px solid #cbd5e1" }}
                  className="font-bold pb-4 text-gray-800 text-sm">
                  قیمت این دوره :{" "}
                  <s className="text-gray-500">{e.discount}</s>
                  <span className=" text-red-500"> {e.price} </span>
                  {/* <span className="text-orange">{Course[0].price}</span>*/}
                </p>
                <p className="mt-5 mr-2 font-yekan text-gray-800 text-sm">
                  مدت زمان دوره :{" "}
                  <span className="text-stone-800">{e.time}</span>
                </p>
                <p className="mt-4 mr-2 font-yekan text-gray-800 text-sm">
                  تعداد دانشجو :{" "}
                  <span className="text-stone-800">
                    {courseId == 1 ? length : length}
                  </span>
                </p>
                <p className="mt-4 mr-2 font-yekan text-gray-800 text-sm">
                  سطح دوره :{" "}
                  <span className="text-stone-800">{e.level}</span>
                </p>
                <p
                  style={{ borderBottom: "1px solid #cbd5e1" }}
                  className="mt-4 mr-2 pb-4 font-yekan text-gray-800 text-sm">
                  وضعیت دوره :{" "}
                  <span className="text-green-600">
                    در حال برگزاری
                  </span>
                </p>

                {courseId == 1 ? (
                  <>
                    {allowed ? (
                      <div>
                        <p className="text-green-600 pr-2 pt-4">
                          شما قبلا در این دوره ثبت نام کردی&nbsp;!
                        </p>
                      </div>
                    ) : (
                      <button
                        id="goCart"
                        onClick={() => goToCourse("course1")}
                        className="bg-indigo-600 text-white p-2 w-full text-center rounded-md mt-6 font-yekan hover:border-2 border-white transition">
                        ثبت نام این دوره
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {allowed ? (
                      <div>
                        <p className="text-green-600 pr-2 pt-4">
                          شما قبلا در این دوره ثبت نام کردی&nbsp;!
                        </p>
                      </div>
                    ) : (
                      <button
                        id="goCart"
                        onClick={() => addToCart()}
                        className="bg-indigo-600 text-white p-2 w-full text-center rounded-md mt-6 font-yekan hover:border-2 border-white transition">
                        ثبت نام این دوره
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className=" w-full md:w-4/5 p-5  md:order-1 bg-white rounded">
              <iframe
                title="معرفی دوره"
                className="w-full h-96  rounded"
                src={e.filmDesc}
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
            </div>
          </div>
          <div className="mt-3 text-sm p-6 text-gray-600 bg-white rounded">
            <p className="text-xl p-3 text-center text-indigo-600 font-yekan-bold">
              توضیحات
            </p>
            <br />
            {e.desc.map((p) => (
              <>
                <p className="text-gray-600 font-yekan-bold text-sm">
                  {p.head}
                </p>
                <p className="mt-2 text-gray-600 md:font-yekan">
                  {p.content}
                </p>
                <br />
              </>
            ))}
          </div>
          <a href="https://t.me/pouneschanel">
            <div className="w-full p-2 text-center font-yekan-bold rounded mt-4 text-indigo-600 text-lg bg-white ">
              ورود به کانال تلگرام
            </div>
          </a>
          <div className=" w-full mt-3 md:p-5 p-3  bg-white rounded">
            {e.id !== 1 ? (
              <>
                {sections.map((p) => (
                  <div>
                    {p.role === 1 ? (
                      <div>
                        <div className="w-full md:h-14 h-auto flex justify-between text-sm font-yekan md:text-base text-gray-700 shadow-sm p-2 mt-2">
                          <div className="flex">
                            <p className="w-8 h-8 rounded-full text-center bg-indigo-600 pt-2 md:pt-1 text-white font-semibold">
                              {p.number}
                            </p>
                            <p className="pt-1 mr-4">{p.name}</p>
                          </div>
                          <div className="flex">
                            <p className="pt-2 ml-3">{p.time}</p>
                            <div>
                              {allowed ? (
                                <>
                                  {courseId == 1 ? (
                                    <a
                                      href={p.url}
                                      className="p-2 inline-block rounded-full border-2 border-indigo-600">
                                      <CgSoftwareDownload />
                                    </a>
                                  ) : (
                                    <Link
                                      to="/Access"
                                      className="p-2 inline-block rounded-full border-2 border-indigo-600">
                                      <CgSoftwareDownload />
                                    </Link>
                                  )}
                                </>
                              ) : (
                                <p
                                  onClick={() =>
                                    toastr.error(
                                      "لطفا اول در دوره ثبت نام کن",
                                    )
                                  }
                                  className="p-2 cursor-pointer rounded-full border-2 border-indigo-600">
                                  <CgSoftwareDownload />
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full md:h-14 h-auto flex justify-between text-sm font-yekan md:text-base text-gray-700 bg-gray-100 p-2 mt-4">
                        <div className="flex">
                          <p className="w-8 h-8 rounded-full border-2 border-indigo-600 text-center pt-1 text-white font-semibold"></p>
                          <p className="pt-1 mr-4">{p.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {sections2.map((p) => (
                  <div>
                    {p.role === 1 ? (
                      <div>
                        {p.number <= 59 ? (
                          <div className="w-full md:h-14 h-auto flex justify-between text-sm font-yekan md:text-base text-gray-700 shadow-sm p-2 mt-2">
                            <div className="flex">
                              <p className="w-8 h-8 rounded-full text-center bg-indigo-600 pt-2 md:pt-1 text-white font-semibold">
                                {p.number}
                              </p>
                              <p className="pt-1 mr-4">{p.name}</p>
                            </div>
                            <div className="flex">
                              <p className="pt-2 ml-3">{p.time}</p>
                              <div>
                                {allowed ? (
                                  <a
                                    href={p.url}
                                    className="p-2 inline-block rounded-full border-2 border-indigo-600">
                                    <CgSoftwareDownload />
                                  </a>
                                ) : (
                                  <p
                                    onClick={() =>
                                      toastr.error(
                                        "لطفا اول در دوره ثبت نام کن",
                                      )
                                    }
                                    className="p-2 cursor-pointer rounded-full border-2 border-indigo-600">
                                    <CgSoftwareDownload />
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="w-full md:h-14 h-auto flex justify-between text-sm font-yekan md:text-base text-gray-700 shadow-sm p-2 mt-2">
                              <div className="flex">
                                <p className="w-8 h-8 rounded-full text-center bg-indigo-600 pt-2 md:pt-1 text-white font-semibold">
                                  {p.number}
                                </p>
                                <p className="pt-1 mr-4">{p.name}</p>
                              </div>
                              <div className="flex">
                                <p className="pt-2 ml-3">{p.time}</p>
                                <div>
                                  {allowed ? (
                                    <>
                                      {token.user.endSession ? (
                                        <a
                                          href={p.url}
                                          className="p-2 inline-block rounded-full border-2 border-indigo-600">
                                          <CgSoftwareDownload />
                                        </a>
                                      ) : (
                                        <a
                                          href="#"
                                          onClick={() => handleOpen()}
                                          className="p-2 inline-block rounded-full border-2 border-indigo-600">
                                          <CgSoftwareDownload />
                                        </a>
                                      )}
                                    </>
                                  ) : (
                                    <p
                                      onClick={() =>
                                        toastr.error(
                                          "لطفا اول در دوره ثبت نام کن",
                                        )
                                      }
                                      className="p-2 cursor-pointer rounded-full border-2 border-indigo-600">
                                      <CgSoftwareDownload />
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="w-full md:h-14 h-auto flex justify-between text-sm font-yekan md:text-base text-gray-700 bg-gray-100 p-2 mt-4">
                        <div className="flex">
                          <p className="w-8 h-8 rounded-full border-2 border-indigo-600 text-center pt-1 text-white font-semibold"></p>
                          <p className="pt-1 mr-4">{p.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* comments */}
          <Comments />

          {/* end comments */}
        </div>
      ))}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}>
        <Fade in={open}>
          <Box
            sx={{
              bgcolor: "background.paper",
              position: "relative",
              top: "35%",
              height: "30vh",
              width: "80%",
              marginRight: "10%",
              p: 1,
              borderRadius: "5px",
            }}>
            <p className="text-red-600 text-center mt-12 font-bold">
              شما مجوز دریافت این فصل را ندارید !
            </p>
            <div className="w-full flex">
              <a
                href="https://aparat.com/v/cghWH"
                className="px-6 py-2 bg-green-800 text-white mt-8 mx-auto rounded">
                دریافت مجوز
              </a>
            </div>
            <div className="flex ">
              <a
                className="mx-auto text-sm text-blue-800 underline mt-6"
                href="/image/baner.webp"
                download>
                دریافت بنر
              </a>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SingleCourse;
