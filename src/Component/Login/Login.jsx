import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./../../Context/Context";

const Login = () => {
  const context = useContext(Context);
  return (
    <div>
      <h1 className="">.</h1>
      <form
        onSubmit={(e) => context.handleSubmitLogin(e)}
        className="mt-16 md:mt-24 mx-auto  border-2 border-gray-200 w-4/5 md:w-1/3 p-4 text-indigo-700 text-sm rounded-lg"
      >
        <p className="text-center text-2xl font-extrabold">پونس</p>
        <p className=" text-center p-3 mt-4 bg-indigo-50 rounded-lg">ورود</p>

        <div className="p-3 mt-3">
          <label>
            ایمیل:
            <br />
            <input
              type="email"
              name="emailLogin"
              className="w-full border-2 border-gray-200 mt-2 h-11 rounded-lg"
              value={context.emailLogin}
              onChange={(e) => context.setEmailLogin(e.target.value)}
            />
            {context.loginValidator.current.message(
              "emailLogin",
              context.emailLogin,
              "required|email"
            )}
          </label>
          <p className="opacity-0">.</p>
          <label>
            رمز عبور:
            <br />
            <input
              type="password"
              name="passwordLogin"
              className="w-full border-2 border-gray-200 mt-2 h-11 rounded-lg"
              value={context.passwordLogin}
              onChange={(e) => context.setPasswordLogin(e.target.value)}
            />
            {context.loginValidator.current.message(
              "passwordLogin",
              context.passwordLogin,
              "min:5|required"
            )}
          </label>
        </div>
        <p className="px-3 text-sm text-red-700">
          <Link to="/register">هنوز ثبت نام نکردم! (ثبت نام)</Link>
        </p>
        <div className="p-3">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-3"
          >
            ورود به سایت
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
