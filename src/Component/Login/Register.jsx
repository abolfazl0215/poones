import React, { useRef, useState } from "react";
import toastr from "toastr";
import { registerUser } from "../../Services/userService";
import SimpleReactValidator from "simple-react-validator";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پرکردن این فیلد الزامی میباشد",
        min: "مقدرا وارد شده نباید کمتر از 5 کاراکتر باشد",
        email: "ایمیل وارد شده صحیح نمیباشد",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { fullname, email, password };
    console.log(user);

    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          toastr.success("کاربر با موفقیت ساخته شد");
        }
        // localStorage.setItem("fullname", fullname);
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (err) {
      toastr.error("کاربر از قبل وجود دارد");
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="">.</h1>

      <form
        action="http://localhost:3001/message"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        className="mt-28 mx-auto  border-2 w-4/5 md:w-1/3 p-4 text-color rounded-lg"
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
              name="fullname"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            {validator.current.message("fullname", fullname, "min:5|required")}
          </label>
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
