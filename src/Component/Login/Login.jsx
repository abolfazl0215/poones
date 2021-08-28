import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="">.</h1>
      <form className="mt-28 mx-auto  border-2 w-4/5 md:w-1/3 p-4 text-color rounded-lg">
        <p className="text-center text-2xl font-extrabold">پونس</p>
        <p className=" text-center p-3 mt-4 bg-color-fade rounded-lg">
          ورود به سایت
        </p>
        <div className="p-3 mt-3">
          <label>
            ایمیل:
            <br />
            <input
              type="text"
              className="w-full border-2 mt-2 h-11 rounded-lg"
            />
          </label>
        </div>
        <div className="p-3">
          <button
            type="submit"
            className="w-full bg-color text-white p-3 rounded-lg mt-3"
          >
            ورود به پونس
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
