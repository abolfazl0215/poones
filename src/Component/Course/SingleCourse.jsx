import React, { useContext, useEffect, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import toastr from "toastr";
import Comments from "./Comments";
import Course from "./Courses.json";
import http from '../../Services/httpService';
import jwt from 'jsonwebtoken'
import "./index.css";
import Context from "../../Context/Context";


const SingleCourse = () => {
  const [allowed, setAllowed] = useState(false)

  const context = useContext(Context)

  const goToCourse =async (course) => {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        const email = jwt.decode(token).user.email
            const { status , data } = await http.post(
              "http://localhost:3000/registerCourse",
              JSON.stringify({ course,email })
        );
        console.log(data.token)
            if (status === 201) {
              toastr.success("به دوره خوش اومدی .")
              setAllowed(true)
            }
          } else {
            toastr.error("لطفا اول تو سایت ثبت نام کن")
          }
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(async() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    
    if (localStorage.getItem("token")) {
      const decode = jwt.decode(localStorage.getItem('token'));
      const isAllowed = decode.user.courses    
      if (isAllowed.length>0) {
        setAllowed(true)
      }
    }
  }, []);

  return (
    <div className="md:p-8 p-3">
      <h1>.</h1>
      <h1 className="mt-12 w-full text-center bg-gray-100  font-bold text-color text-xl rounded p-3 bg-white">
        {Course[0].name}
      </h1>
      <div className="w-full flex justify-between mt-3 flex-wrap shadow-xl">
        <div className="md:w-1/5 w-full mt-3 md:mt-0 md:pl-3 order-2 md:order-1">
          <div className="  h-full text-gray-600 p-5 bg-white rounded">
            <p className="font-bold text-purple-800 text-sm">
              قیمت این دوره :{" "}
              <span className="text-orange">
                {Course[0].price}
              </span>
            </p>
            <hr className="mt-2" />
            <p className="mt-5 mr-2">مدت زمان دوره : 23:40:00</p>
            <p className="mt-2 mr-2">تعداد دانشجو : {}</p>
            <p className="mt-2 mr-2">سطح دوه : مقدماتی تا پیشرفته</p>
             
            {allowed ? (
              <div>
                <p className="text-green-500 pr-2 pt-4">شما قبلا در این دوره ثبت نام کردی !</p>
              </div>
            ): (
              <button
                id="goCart"
                  onClick={() => {
                    goToCourse("course1");
                    context.getUser()
                  }}
                className="bg-color text-white p-2 w-full text-center rounded-md mt-6 text-xl"
              >
                ثبت نام این دوره
              </button>
            )}
          </div>
        </div>
        <div className=" w-full md:w-4/5 p-5  md:order-1 bg-white rounded">
          <iframe
            title="معرفی دوره"
            className="w-full h-96 rounded"
            src="https://www.aparat.com/video/video/embed/videohash/CLrgf/vt/frame"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      </div>
      <div className="mt-3  p-5 text-gray-600 bg-white rounded shadow-xl">
        <p className="text-2xl p-3 text-center">توضیحات</p>
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </div>
      <div className=" w-full mt-3 md:p-5 p-3  bg-white rounded shadow-xl">
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 bg-gray-100 p-2 mt-4">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center border-2 border-color pt-1 text-white font-semibold"></p>
            <p className="pt-1 mr-4">فصل اول : آشنایی با دوره</p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              1
            </p>
            <p className="pt-1 mr-4"> معرفی دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:7:00</p>
            <p className="p-2 rounded-full border-2 border-color">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              2
            </p>
            <p className="pt-1 mr-4"> گرفتن بهترین نتیجه از این دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:3:00</p>
            <p className="p-2 rounded-full border-2 border-color">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              3
            </p>
            <p className="pt-1 mr-4"> آماده سازی محیط کدنویسی</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:15:00</p>
            <p className="p-2 rounded-full border-2 border-color">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        {/* session2 */}
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 bg-gray-100 p-2 mt-4">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center border-2 border-color pt-1 text-white font-semibold"></p>
            <p className="pt-1 mr-4">فصل دوم : html</p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              1
            </p>
            <p className="pt-1 mr-4"> معرفی دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:7:00</p>
            <p className="p-2 rounded-full border-2 border-color">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              2
            </p>
            <p className="pt-1 mr-4"> گرفتن بهترین نتیجه از این دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:3:00</p>
            <p className="p-2 rounded-full border-2 border-color">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              3
            </p>
            <p className="pt-1 mr-4"> آماده سازی محیط کدنویسی</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:15:00</p>
            <p className="p-2 rounded-full border-2 border-color">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
      </div>
      {/* comments */}
      <Comments />
      {/* end comments */}
    </div>
  );
};

export default SingleCourse;
