import React, { useEffect, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import toastr from "toastr";
import Comments from "./Comments";
import Course from "./Courses.json";
import http from '../../Services/httpService';
import jwt from 'jsonwebtoken'
import "./index.css";


const SingleCourse = () => {
  const [allowed, setAllowed] = useState(false)


  const goToCourse =async (course) => {
    try {
      const token = localStorage.getItem("token")
      if (token) {
        const email = jwt.decode(token).user.email
            const { status , data } = await http.post(
              "https://api.pounes.ir/registerCourse",
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

  const getUser = async () => {
    try {
        const decode = jwt.decode(localStorage.getItem("token"))
        const mail = decode.user.email;
        const { data } = await http.post("https://api.pounes.ir/getUser",JSON.stringify({email:mail}));
      localStorage.setItem('token', data.token)
      setAllowed(true)
    } catch (err) {
        console.log(err)
    }
  }
  const [length,setLength]=useState("")

  useEffect(async() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    
    if (localStorage.getItem("token")) {
      const decode = jwt.decode(localStorage.getItem('token'));
      const isAllowed = decode.user.courses    
      if (isAllowed.length>0) {
        setAllowed(true);
      }
    }

    try {
      const { data } =await http.post("https://api.pounes.ir/getLength",JSON.stringify({course:"course1"}))
    setLength(data.length)
    } catch (err) {
      console.log(err)
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
          <div className="  h-full text-gray-600 p-5 text-sm bg-white rounded">
            <p className="font-bold text-purple-800 text-sm">
              قیمت این دوره :{" "}
              <span className="text-orange">
                {Course[0].price}
              </span>
            </p>
            <hr className="mt-2" />
            <p className="mt-5 mr-2">مدت زمان دوره : 01:06:08</p>
            <p className="mt-2 mr-2">تعداد دانشجو : {length}</p>
            <p className="mt-2 mr-2">سطح دوه : مقدماتی تا پیشرفته</p>
            <p className="mt-2 mr-2 border-b-2 pb-4">وضعیت دوره : <span className="text-green-500">در حال برگذاری</span></p>
             
            {allowed ? (
              <div>
                <p className="text-green-500 pr-2 pt-4">شما قبلا در این دوره ثبت نام کردی&nbsp;!</p>
              </div>
            ): (
              <button
                id="goCart"
                  onClick={() => {
                    goToCourse("course1");
                    getUser()
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
            src="https://www.aparat.com/video/video/embed/videohash/LNZBa/vt/frame?recom=none"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true">
          </iframe>
        </div>
      </div>
      <div className="mt-3 text-sm p-5 text-gray-600 bg-white rounded shadow-xl">
        <p className="text-2xl p-3 text-center">توضیحات</p>
        <br />
        <b className="text-black">چرا باید html و css رو یاد بگیریم ؟</b>
        <p className="mt-2 text-gray-600">
          ببینید html و css اسکلت و ظاهر سایت مارو تشکیل میدن و ساختار و اسکلت همه سایت های دنیا به همین صورته پس یادگیری این دوره یک ضرورته برای ورود به دنیای طراحی سایت و سایت بدون اسکلت و ظاهر معنایی نداره 
        </p><br />
        <b className="text-black">آبا یادگیری این دوره سخته ؟</b>
        <p className="mt-2 text-gray-600">
          یه خبر خوب : html و css آسونترین زبان های کامپیوتری هستن و اصلا مطالب پیچیده ای ندارن فقط باید خوب تمرین کنید تا مطالب ملکه ذهنتون بشن و هیچ نیازی هم به حفط کردن چیزی نیست فقط باید یاد بگیرید و تمام .
        </p><br/>
        <b className="text-black">مزیت این دوره نسبت به دوره های دیگه چیه ؟</b>
        <p className="mt-2 text-gray-600">
          به جرعت میتونم بگم این دوره یکی از کامل ترین و باکیفیت ترین دوره های طراحی سایته و یکی از مزیت های این دوره پشتیبانی فوقالعاده اونه که خود من 24 ساعته پاسخگوی سوالاتتون هستم .
        </p><br/>
        <b className="text-black">این دوره مخصوص چه کساییه ؟</b>
        <p className="mt-2 text-gray-600">
          این دوره مخصوص کساییه که هیچ آشنایی با دنیای برنامه نویسی ندارن و تازه میخوان این تخصص رو یاد بگیرن اگه جزو این دسته هستی خب بهت تبریک میگم جای درستی اومدی . و دسته دوم کسانی که میخوان علمشون رو در زمینه html و css افزایش بدن .
        </p><br/>
        <b className="text-black">پشتیبانی دوره چطوره ؟</b>
        <p className="mt-2 text-gray-600">
                  من شخصا دوره رو پشتیبانی میکنم و از طریق فضای مجازی باهاتون در ارتباط هستم و سوالاتتون در کمتر از 24 ساعت جواب میدم .
        </p>

      </div>
      <div className=" w-full mt-3 md:p-5 p-3  bg-white rounded shadow-xl">
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 bg-gray-100 p-2 mt-4">
          <div className="flex">
            <p className="w-8 h-8 rounded-full border-2 border-indigo-600 text-center pt-1 text-white font-semibold"></p>
            <p className="pt-1 mr-4">فصل اول : HTML</p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              1
            </p>
            <p className="pt-1 mr-4"> معرفی دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:3:23</p>
            <a href="/videos/1-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p  className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              2
            </p>
            <p className="pt-1 mr-4"> html چیست</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:5:38</p>
            <a href="/videos/2-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              3
            </p>
            <p className="pt-1 mr-4"> نصب محیط کدنویسی</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:2:53</p>
            <a href="/videos/3-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>

        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              4
            </p>
            <p className="pt-1 mr-4">تگ های text</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:11:18</p>
            <a href="/videos/4-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              5
            </p>
            <p className="pt-1 mr-4"> تگ های title</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:7:12</p>
            <a href="/videos/5-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              6
            </p>
            <p className="pt-1 mr-4"> entity (موجودیت ها)</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:3:39</p>
            <a href="/videos/6-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              7
            </p>
            <p className="pt-1 mr-4">متاتگ ها</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:2:52</p>
            <a href="/videos/7-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              8
            </p>
            <p className="pt-1 mr-4"> لیست ها</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:5:38</p>
            <a href="/videos/8-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              9
            </p>
            <p className="pt-1 mr-4">عکس ها</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:15:53</p>
            <a href="/videos/9-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-sm md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-color pt-2 md:pt-1 text-white font-semibold">
              10
            </p>
            <p className="pt-1 mr-4"> تگ picture</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:8:20</p>
            <a href="/videos/10-html.rar" className="p-2 rounded-full border-2 border-indigo-600">
              <CgSoftwareDownload />
            </a>
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
