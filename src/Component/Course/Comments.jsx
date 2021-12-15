import React from "react";

const Comments = () => {
  return (
    <div className="border-singleCourse w-full mt-3 md:p-5 p-3  bg-white rounded pb-32">
      <h3 className="font-bold p-2 text-gray-700">نظرات :</h3>
      <form className="pb-6">
        <textarea
          id="w3review"
          name="w3review"
          rows="6"
          className="w-full p-2 border-2 border-gray-200"
          placeholder="نظرت رو برام بنویس ..."
        ></textarea>
        <button
          className="bg-color text-white font-bold px-4 py-2 rounded w-full md:w-1/5"
          type="submit"
        >
          ارسال نظر
        </button>
      </form>
      <div>
        <div className="w-full border-singleCourse mt-2 p-2">
          <div className="flex">
            <div className="w-12 h-12 circle bg-gray-200"></div>
            <p className="mt-4 mr-2 text-sm font-bold">علی محمدی</p>
          </div>
          <p className="m-2 mt-4 text-sm">
            و باید از شما تشکر کرد بابت این همه زحماتی که میکشید و نمیکشید و
            خواهد و شاید کشید با سلام و تشکر از استاد بسیارعزیز و مقتدر یزان
            زمین
          </p>
        </div>
        <div className="pr-4">
          <div className="w-full border-singleCourse-response mt-2 p-2">
            <div className="flex">
              <img
                src="image/avatar.png"
                className="w-12 h-12 circle border-2 "
              ></img>
              <p className="mt-4 mr-2 text-sm font-bold">
                ابوالفضل مختاری{" "}
                <span className="text-sm font-light">(مدیرسایت)</span>
              </p>
            </div>
            <p className="m-2 mt-4 text-sm">
              و باید از شما تشکر کرد بابت این همه زحماتی که میکشید و نمیکشید و
              خواهد و شاید کشید با سلام و تشکر از استاد بسیارعزیز و مقتدر یزان
              زمین
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
