import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./../../Context/Context";

const Register = () => {
  const context = useContext(Context);
  

  return (
    <div>
      <h1 className="">.</h1>

      <form
        onSubmit={(e) => context.handleSubmitRegister(e)}
        className="mt-16 md:mt-24 mx-auto  border-2 w-4/5 md:w-1/3 p-4 text-purple-900 text-sm rounded-lg"
      >
        <p className="text-center text-2xl font-extrabold">پونس</p>
        <p className=" text-center p-3 mt-4 bg-color-fade rounded-lg">
          ثبت نام
        </p>

        <div className="p-3 mt-3">
          <label>
            نام و نام خانوادگی:
            <br />
            <input
              type="text"
              name="fullName"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={context.fullName}
              onChange={(e) => context.setFullName(e.target.value)}
            />
            
            {context.validator.current.message(
              "fullname",
              context.fullName,
              "min:3|required"
            )}
          </label>
          <label>
            ایمیل:
            <br />
            <input
              type="email"
              name="email"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            {context.validator.current.message(
              "email",
              context.email,
              "required|email"
            )}
          </label>
          <label>
            رمز عبور:
            <br />
            <input
              type="password"
              name="password"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={context.password}
              onChange={(e) => context.setPassword(e.target.value)}
            />
            {context.validator.current.message(
              "password",
              context.password,
              "min:5|required"
            )}
          </label>
          <label>
            تکرار رمز عبور
            <br />
            <input
              type="password"
              name="confirmPassword"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={context.confirmPassword}
              onChange={(e) => context.setConfirmPassword(e.target.value)}
            />
            <p className="text-red-400">{context.passwordConfirmResponse}</p>
            {context.validator.current.message(
              "confirmPassword",
              context.confirmPassword,
              "min:5|required"
            )}
          </label>
        </div>
        <p className="px-3 text-sm text-red-700">
          <Link to="/login">قبلا ثبت نام کردم (ورود به سایت)</Link>
        </p>
        <div className="p-3">
          <button
            type="submit"
            className="w-full bg-color text-white p-3 rounded-lg mt-3"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
