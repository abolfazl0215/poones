import React, { useContext, useEffect } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import CartContext from "./../../Context/CartContext";
import Comments from "./Comments";

const SingleCourse = () => {
  const cartContext = useContext(CartContext);

  // useEffect(() => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }, []);

  return (
    <div className="md:p-8 p-3 bg-gray-50">
      <h1>.</h1>
      <h1 className="mt-12 w-full text-center border-singleCourse font-bold text-color text-xl rounded p-3 bg-white">
        {cartContext.singleCourse.name}
      </h1>
      <div className="w-full flex justify-between mt-3 flex-wrap">
        <div className="md:w-1/5 w-full mt-3 md:mt-0 md:pl-3 order-2 md:order-1">
          <div className=" border-singleCourse h-full text-gray-600 p-5 bg-white rounded">
            <p className="font-bold text-purple-800 text-sm md:text-xs">
              <span className="text-orange">$ </span>
              قیمت این دوره :{" "}
              <span className="text-orange">
                {cartContext.singleCourse.price}
              </span>
            </p>
            <hr className="mt-2" />
            <p className="mt-5 mr-2">مدت زمان دوره : 23:40:00</p>
            <p className="mt-2 mr-2">تعداد دانشجو : 223</p>
            <p className="mt-2 mr-2">سطح دوه : مقدماتی تا پیشرفته</p>
            <button
              id="goCart"
              onClick={() =>
                cartContext.goToCart(cartContext.singleCourse.name)
              }
              className="bg-color text-white p-2 w-full text-center rounded-md mt-6 text-xl"
            >
              ثبت نام این دوره
            </button>
          </div>
        </div>
        <div className="border-singleCourse w-full md:w-4/5 p-5  md:order-1 bg-white rounded">
          <iframe
            title="معرفی دوره"
            className="w-full h-96"
            src="https://www.aparat.com/video/video/embed/videohash/CLrgf/vt/frame"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      </div>
      <div className="mt-3 border-singleCourse p-5 text-gray-600 bg-white rounded">
        <p className="text-2xl">توضیحات :</p>
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, qui!
        Quos, quidem? Saepe tenetur exercitationem libero, corrupti ea amet est
        delectus debitis? Eos quisquam sapiente, laboriosam iste atque commodi
        alias. Blanditiis laborum inventore esse aliquam odio sint optio sit eos
        dolor minus, numquam assumenda quaerat, corrupti ad, nostrum ratione
        exercitationem. Repellat repellendus sint earum sapiente asperiores in
        expedita modi quam? Nulla, vel enim quibusdam eligendi odio unde?
        Similique corrupti aliquam maiores optio minus reprehenderit unde
        voluptates assumenda, ratione quis cupiditate voluptas, eius, vero amet
        possimus tenetur dolorum repellendus fugiat doloremque! Enim vitae
        voluptas quo facere possimus eveniet dolores in quidem similique odit
        repudiandae quos ut reprehenderit sit omnis obcaecati ad maxime culpa
        hic, alias error voluptatum tempore? Facilis, ipsum soluta. Est, iste
        nostrum officia ipsam a quae et fuga harum, consectetur architecto dolor
        unde voluptatem in cupiditate vero, aspernatur quas odit laudantium ad
        illum!
      </div>
      <div className="border-singleCourse w-full mt-3 md:p-5 p-3  bg-white rounded">
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
