import React, { useState } from "react";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="">.</h1>
      <form
        action="http://localhost:3001/message"
        method="POST"
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
              name="fullName"
              className="w-full border-2 mt-2 h-11 rounded-lg"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
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

export default Register;
