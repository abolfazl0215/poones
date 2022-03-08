import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Context from "./../../Context/Context";

const Login = () => {
  const context = useContext(Context);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ورد به سایت | پونس</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="">.</h1>
      <form
        onSubmit={(e) => context.handleSubmitLogin(e)}
        className="mt-24 md:mt-24 mx-auto  border-2 border-gray-200 w-4/5 md:w-1/3 p-4 text-indigo-700 text-sm rounded-lg">
        <p className="text-center text-3xl font-extrabold font-yekan">
          پونس
        </p>
        <p className=" text-center p-3 mt-4 rounded-lg">
          ورود / ثبت نام
        </p>

        <div className="p-3 mt-6">
          <label>
            شماره موبایل یا ایمیل خودرا وارد نمایید
            <br />
            <input
              type="text"
              name="loginValue"
              className="w-full border-2 border-gray-200 mt-2 h-11 rounded-lg"
              value={context.emailLogin}
              onChange={(e) => {
                context.setEmailLogin(e.target.value);
                localStorage.setItem("login", e.target.value);
              }}
            />
            {context.loginValidator.current.message(
              "loginValue",
              context.emailLogin,
              "required",
            )}
          </label>
        </div>

        <div className="p-3">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-3">
            ورود به پونس
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
