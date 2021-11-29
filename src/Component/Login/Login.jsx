import React, { useRef, useState } from "react";
import Axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import toastr from "toastr";
import { withRouter } from "react-router";
// import { registerUser } from "../../Services/userService";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پرکردن این فیلد الزامی میباشد",
        min: "مقدرا وارد شده کمتر از حد مجاز است",
        email: "ایمیل وارد شده صحیح نمیباشد",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);

    //start validation form
    try {
      if (validator.current.allValid()) {
        const { status, data } = await Axios.post(
          "http://localhost:3000/user/login",
          JSON.stringify(user),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (status === 201) {
          toastr.success("ورود موفقیت آمیز بود");
          localStorage.setItem("fullName", data);
          history.replace("/");
        }
        if (status === 203) {
          toastr.error("کاربر وجود ندارد");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
      reset();
    } catch (err) {
      console.log(err);
    }
    // end validation form
  };

  return (
    <div>
      <h1 className="">.</h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mt-28 mx-auto  border-2 w-4/5 md:w-1/3 p-4 text-color rounded-lg"
      >
        <p className="text-center text-2xl font-extrabold">پونس</p>
        <p className=" text-center p-3 mt-4 bg-color-fade rounded-lg">ورود</p>

        <div className="p-3 mt-3">
          <label>
            ایمیل:
            <br />
            <input
              type="email"
              name="email"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {validator.current.message("email", email, "required|email")}
          </label>
          <label>
            رمز عبور:
            <br />
            <input
              type="password"
              name="password"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {validator.current.message("password", password, "min:5|required")}
          </label>
        </div>
        <p className="px-3 text-sm text-red-700">
          <Link to="/register">هنوز ثبت نام نکردم! (ثبت نام)</Link>
        </p>
        <div className="p-3">
          <button
            type="submit"
            className="w-full bg-color text-white p-3 rounded-lg mt-3"
          >
            ورود به سایت
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
