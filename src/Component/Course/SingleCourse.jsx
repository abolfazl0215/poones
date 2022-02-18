import React, { useEffect, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import toastr from "toastr";
import Comments from "./Comments";
import Course from "./Courses.json";
import http from "../../Services/httpService";
import jwt from "jsonwebtoken";
import { Helmet } from "react-helmet";
import sections from "./sections.json";
import "./index.css";

const SingleCourse = () => {
  const [allowed, setAllowed] = useState(false);

  const goToCourse = async (course) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const email = jwt.decode(token).user.email;
        const { status, data } = await http.post(
          "https://api.pounes.ir/registerCourse",
          JSON.stringify({ course, email }),
        );
        console.log(data.token);
        if (status === 201) {
          toastr.success("به دوره خوش اومدی .");
          setAllowed(true);
        }
      } else {
        toastr.error("لطفا اول تو سایت ثبت نام کن");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const decode = jwt.decode(localStorage.getItem("token"));
      const mail = decode.user.email;
      const { data } = await http.post(
        "https://api.pounes.ir/getUser",
        JSON.stringify({ email: mail }),
      );
      localStorage.setItem("token", data.token);
      setAllowed(true);
    } catch (err) {
      console.log(err);
    }
  };
  const [length, setLength] = useState("");

  useEffect(async () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (localStorage.getItem("token")) {
      const decode = jwt.decode(localStorage.getItem("token"));
      const isAllowed = decode.user.courses;
      if (isAllowed.length > 0) {
        setAllowed(true);
      }
    }

    try {
      const { data } = await http.post(
        "https://api.pounes.ir/getLength",
        JSON.stringify({ course: "course1" }),
      );
      setLength(data.length);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="md:p-8 p-3 bg-indigo-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>دوره هیولای طراحی سایت</title>
        <link rel="canonical" href="https://pounes.ir" />
      </Helmet>
      <h1>.</h1>
      <h1 className="mt-12 w-full text-center  font-bold text-color font-yekan text-lg rounded p-3 bg-white">
        {Course[0].name}
      </h1>
      <div className="w-full flex justify-between mt-3 flex-wrap">
        <div className="md:w-1/5 w-full mt-3 md:mt-0 md:pl-3 order-2 md:order-1">
          <div className="  h-full text-gray-600 p-5 text-sm bg-white rounded">
            <p className="font-bold text-purple-800 text-sm">
              قیمت این دوره : <s className="text-gray-400">390/000</s>
              <span className="font-bold text-red-500">
                {" "}
                (رایگان){" "}
              </span>
              {/* <span className="text-orange">{Course[0].price}</span>*/}
            </p>
            <hr className="mt-2" />
            <p className="mt-5 mr-2">
              مدت زمان دوره :{" "}
              <span className="text-stone-500"> 05:58:06</span>
            </p>
            <p className="mt-2 mr-2">
              تعداد دانشجو :{" "}
              <span className="text-stone-500">{length}</span>
            </p>
            <p className="mt-2 mr-2">
              سطح دوه :{" "}
              <span className="text-stone-500">
                مقدماتی تا پیشرفته
              </span>
            </p>
            <p className="mt-2 mr-2 border-b-2 pb-4">
              وضعیت دوره :{" "}
              <span className="text-green-600">در حال برگزاری</span>
            </p>

            {allowed ? (
              <div>
                <p className="text-green-600 pr-2 pt-4">
                  شما قبلا در این دوره ثبت نام کردی&nbsp;!
                </p>
              </div>
            ) : (
              <button
                id="goCart"
                onClick={() => {
                  goToCourse("course1");
                  getUser();
                }}
                className="bg-indigo-600 text-white p-2 w-full text-center rounded-md mt-6 font-yekan hover:border-2 border-white transition">
                ثبت نام این دوره
              </button>
            )}
          </div>
        </div>
        <div className=" w-full md:w-4/5 p-5  md:order-1 bg-white rounded">
          <iframe
            title="معرفی دوره"
            className="w-full h-96 rounded"
            src="https://www.aparat.com/video/video/embed/videohash/LNZBa/vt/frame?recom=none"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"></iframe>
        </div>
      </div>
      <div className="mt-3 text-sm p-6 text-gray-600 bg-white rounded">
        <p className="text-2xl p-3 text-center">توضیحات</p>
        <br />
        <p className="text-indigo-800 font-yekan font-bold">
          چرا باید html و css رو یاد بگیریم ؟
        </p>
        <p className="mt-2 text-gray-600 md:font-yeka-n">
          ببینید html و css اسکلت و ظاهر سایت مارو تشکیل میدن و ساختار
          و اسکلت همه سایت های دنیا به همین صورته پس یادگیری این دوره
          یک ضرورته برای ورود به دنیای طراحی سایت و سایت بدون اسکلت و
          ظاهر معنایی نداره
        </p>
        <br />
        <p className="text-indigo-800 font-yekan font-bold">
          آیا یادگیری این دوره سخته ؟
        </p>
        <p className="mt-2 text-gray-600 md:font-yekan">
          یه خبر خوب : html و css آسونترین زبان های کامپیوتری هستن و
          اصلا مطالب پیچیده ای ندارن فقط باید خوب تمرین کنید تا مطالب
          ملکه ذهنتون بشن و هیچ نیازی هم به حفط کردن چیزی نیست فقط
          باید یاد بگیرید و تمام .
        </p>
        <br />
        <p className="text-indigo-800 font-yekan font-bold">
          مزیت این دوره نسبت به دوره های دیگه چیه ؟
        </p>
        <p className="mt-2 text-gray-600 md:font-yekan">
          به جرعت میتونم بگم این دوره یکی از کامل ترین و باکیفیت ترین
          دوره های طراحی سایته و یکی از مزیت های این دوره پشتیبانی
          فوقالعاده اونه که خود من 24 ساعته پاسخگوی سوالاتتون هستم .
        </p>
        <br />
        <p className="text-indigo-800 font-yekan font-bold">
          این دوره مخصوص چه کساییه ؟
        </p>
        <p className="mt-2 text-gray-600 md:font-yekan">
          این دوره مخصوص کساییه که هیچ آشنایی با دنیای برنامه نویسی
          ندارن و تازه میخوان این تخصص رو یاد بگیرن اگه جزو این دسته
          هستی خب بهت تبریک میگم جای درستی اومدی . و دسته دوم کسانی که
          میخوان علمشون رو در زمینه html و css افزایش بدن .
        </p>
        <br />
        <p className="text-indigo-800 font-yekan font-bold">
          پشتیبانی دوره چطوره ؟
        </p>
        <p className="mt-2 text-gray-600 md:font-yekan">
          من شخصا دوره رو پشتیبانی میکنم و از طریق فضای مجازی باهاتون
          در ارتباط هستم و سوالاتتون در کمتر از 24 ساعت جواب میدم .
        </p>
      </div>
      <a href="https://t.me/pouneschanel">
        <div className="w-full p-2 text-center font-yekan rounded mt-4 text-blue-500 bg-white ">
          ورود به کانال تلگرام این دوره
        </div>
      </a>

      <div className=" w-full mt-3 md:p-5 p-3  bg-white rounded">
        {sections.map((p) => (
          <div>
            {p.role === 1 ? (
              <div className="w-full md:h-14 h-auto flex justify-between text-sm font-yekan md:text-base text-gray-700 shadow-sm p-2 mt-2">
                <div className="flex">
                  <p className="w-8 h-8 rounded-full text-center bg-indigo-600 pt-2 md:pt-1 text-white font-semibold">
                    {p.number}
                  </p>
                  <p className="pt-1 mr-4">{p.name}</p>
                </div>
                <div className="flex">
                  <p className="pt-2 ml-3">{p.time}</p>
                  {allowed ? (
                    <a
                      href={p.url}
                      className="p-2 rounded-full border-2 border-indigo-600">
                      <CgSoftwareDownload />
                    </a>
                  ) : (
                    <p
                      onClick={() =>
                        toastr.error("لطفا اول در دوره ثبت نام کن")
                      }
                      className="p-2 cursor-pointer rounded-full border-2 border-indigo-600">
                      <CgSoftwareDownload />
                    </p>
                  )}
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
      </div>
      {/* comments */}
      <Comments />
      {/* end comments */}
    </div>
  );
};

export default SingleCourse;
