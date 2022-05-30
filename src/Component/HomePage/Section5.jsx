import React from "react";

const Section5 = () => {
  return (
    <div className="w-full p-6 px-8 mt-20 pb-6">
      <div className="w-full">
        <div className="flex justify-around">
          <div className="w-1/4 hidden md:block">
            <picture>
              <source srcSet="/image/3.webp" alt="website-image" />
              <img
                id="website"
                src="/image/3.png"
                alt="Website"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="text-gray-700 float-right my-auto text-small sm:text-sm">
            <h1 className="font-bold text-gray-600 text-lg">
              چرا <span className="text-orange">پونس ؟</span>
            </h1>
            <p className="flex">
              <span className="absolute mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  stroke-width="1.5"
                  stroke-linecap="butt"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className=" mr-5 mt-2 text-sm text-gray-500">
                مشاوره رایگان
              </span>
            </p>
            <p className="flex">
              <span className="absolute mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  stroke-width="1.5"
                  stroke-linecap="butt"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className=" mr-5 mt-2 text-sm text-gray-500">
                پشتیبانی فوق العاده
              </span>
            </p>
            <p className="flex">
              <span className="absolute mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  stroke-width="1.5"
                  stroke-linecap="butt"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className=" mr-5 mt-2 text-sm text-gray-500">
                همراهی شما عزیزان از شروع تا ورود به بازار کار
              </span>
            </p>
            <p className="flex">
              <span className="absolute mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  stroke-width="1.5"
                  stroke-linecap="butt"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className=" mr-5 mt-2 text-sm text-gray-500">
                احترام به وقت شما عزیزان و ارایه محتوای باارزش
              </span>
            </p>
            <p className="flex">
              <span className="absolute mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  stroke-width="1.5"
                  stroke-linecap="butt"
                  stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className=" mr-5 mt-2 text-sm text-gray-500">
                محتوای باکیفیت و باارزش نسبت به هزینه و گاها رایگان
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
