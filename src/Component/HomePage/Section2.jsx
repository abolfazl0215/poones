import React from "react";

const Section2 = () => {
  return (
    <div className="mt-16 flex flex-wrap justify-around p-4 md:px-28 pb-12">
      <div className="w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          <img
            className="mx-auto w-1/4 md:w-1/5"
            src="/image/icons/support.gif"
            alt="support"
          />
        </div>
        <p className="text-center text-sm mt-2">همراهی مربی</p>
        <p className="text-center text-gray-600 text-sm m-2">
          با مربی‌های حرفه‌ای و با حوصله رفع اشکال می‌کنید
        </p>
      </div>

      <div className="w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          <img
            className="mx-auto w-1/4 md:w-1/5"
            src="/image/icons/return.gif"
            alt="return"
          />
        </div>
        <p className="text-center text-sm mt-2">تضمین بازگشت وجه</p>
        <p className="text-center text-gray-600 text-sm m-2">
          اگه راضی نبودید تا ۱۵ روز فرصت دارید انصراف بدید
        </p>
      </div>

      <div className="w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          <img
            className="mx-auto w-1/4 md:w-1/5"
            src="/image/icons/quality.gif"
            alt="support"
          />
        </div>
        <p className="text-center text-sm mt-2">تضمین کیفیت</p>
        <p className="text-center text-gray-600 text-sm m-2">
          بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت
          می‌کنید
        </p>
      </div>

      <div className="w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer ">
        <div className="text-center">
          <img
            className="mx-auto w-1/4 md:w-1/5"
            src="/image/icons/performance.gif"
            alt="support"
          />
        </div>
        <p className="text-center text-sm mt-2"> کاربردی و پروژه محور</p>
        <p className="text-center text-gray-600 text-sm m-2">
          {" "}
          با کار روی پروژه های واقعی، بازار رو از نزدیک لمس کنید
        </p>
      </div>
    </div>
  );
};

export default Section2;
