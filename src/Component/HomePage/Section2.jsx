import React, { useState } from "react";

const Section2 = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);

  const showCollapse1 = () => setCollapse1(!collapse1);
  const showCollapse2 = () => setCollapse2(!collapse2);
  const showCollapse3 = () => setCollapse3(!collapse3);
  const showCollapse4 = () => setCollapse4(!collapse4);

  return (
    <div className="mt-24 md:flex md:justify-around">
      <div
        className="w-3/4 my-3 p-2  mx-auto rounded-xl box-collapse md:w-1/5 cursor-pointer "
        onClick={showCollapse1}
      >
        <div className="text-center">
          <lord-icon
            src="https://cdn.lordicon.com/zpxybbhl.json"
            trigger="loop"
            colors="primary:#6c16c7,secondary:#e88c30"
            stroke="65"
            style={{
              width: "50px",
              height: "50px",
              zIndex: "-1",
            }}
            className="text-center"
          ></lord-icon>
        </div>
        <p className="text-center md:text-lg text-sm">همراهی مربی</p>
        <p className="text-center text-gray-500 sm-hidden">
          با مربی‌های حرفه‌ای و با حوصله رفع اشکال می‌کنید
        </p>
      </div>

      <div
        className="w-3/4 my-3 p-2  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer "
        onClick={showCollapse2}
      >
        <div className="text-center">
          <lord-icon
            src="https://cdn.lordicon.com/nxaaasqe.json"
            trigger="loop"
            colors="primary:#6c16c7,secondary:#e88c30"
            stroke="65"
            style={{
              width: "50px",
              height: "50px",
              zIndex: "-1",
            }}
          ></lord-icon>
        </div>
        <p className="text-center md:text-lg text-sm">تضمین بازگشت وجه</p>
        <p className="text-center text-gray-500 sm-hidden">
          اگه راضی نبودید تا ۱۵ روز فرصت دارید انصراف بدید
        </p>
      </div>

      <div
        className="w-3/4 my-3 p-2  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer "
        onClick={showCollapse3}
      >
        <div className="text-center">
          <lord-icon
            src="https://cdn.lordicon.com/fqrjldna.json"
            trigger="loop"
            colors="primary:#6c16c7,secondary:#e88c30"
            stroke="65"
            style={{
              width: "50px",
              height: "50px",
              zIndex: "-1",
            }}
          ></lord-icon>
        </div>
        <p className="text-center md:text-lg text-sm">تضمین کیفیت</p>
        <p className="text-center text-gray-500 sm-hidden">
          بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت
          می‌کنید
        </p>
      </div>

      <div
        className="w-3/4 my-3 p-2  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer "
        onClick={showCollapse4}
      >
        <div className="text-center">
          <lord-icon
            src="https://cdn.lordicon.com/nocovwne.json"
            trigger="loop"
            colors="primary:#6c16c7,secondary:#e88c30"
            stroke="65"
            style={{
              width: "50px",
              height: "50px",
              zIndex: "-1",
            }}
          ></lord-icon>
        </div>
        <p className="text-center md:text-lg text-sm"> کاربردی و پروژه محور</p>
        <p className="text-center text-gray-500 sm-hidden">
          {" "}
          با کار روی پروژه های واقعی، بازار رو از نزدیک لمس کنید
        </p>
      </div>
    </div>
  );
};

export default Section2;
