import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { fullname, email, password };
    console.log(user);

    axios
      .post(
        "https://toplearnapi.ghorbany.dev/api/register",
        JSON.stringify(user),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(({ data, status }) => {
        if (status === 201) {
          toastr.success("کاربر با موفقیت ساخته شد");
        }
        localStorage.setItem("fullname", fullname);
        console.log(data);
        alert(localStorage.getItem("fullname"));
      })
      .catch((err) => {
        toastr.error("کاربر از قبل وجود دارد");
        console.log(err);
      });
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
