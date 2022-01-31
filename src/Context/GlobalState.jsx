import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import toastr from "toastr";
import jwt from "jsonwebtoken";
import { registerUser, loginUser } from "../Services/userService";
import Context from "./Context";

const GlobalState = ({ children }) => {
  // const location = useLocation();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordConfirmResponse, setPasswordConfirmResponse] =
    useState("");

  const [, forceUpdate] = useState(false);
  const [loginUpdate, setLoginUpdate] = useState();

  const [token, setToken] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("fullName");
    setLoginUpdate(data);
  }, [loginUpdate]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    }
  });

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پرکردن این فیلد الزامی میباشد",
        min: "مقدرا وارد شده کمتر از حد مجاز است",
        email: "ایمیل وارد شده صحیح نمیباشد",
      },
      element: (message) => (
        <div style={{ color: "red" }}>{message}</div>
      ),
    }),
  );
  const loginValidator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پرکردن این فیلد الزامی میباشد",
        min: "مقدرا وارد شده کمتر از حد مجاز است",
        email: "ایمیل وارد شده صحیح نمیباشد",
      },
      element: (message) => (
        <div style={{ color: "red" }}>{message}</div>
      ),
    }),
  );

  const reset = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = { email: emailLogin, password: passwordLogin };
    console.log(user);

    //start validation form
    try {
      if (loginValidator.current.allValid()) {
        const { status, data } = await loginUser(user);
        localStorage.setItem("token", data.token);
        const decode = jwt.decode(data.token);
        setToken(true);
        if (status === 200) {
          toastr.success("ورود موفقیت آمیز بود");
          navigate("/");
          // for rerender
          const arr = [];
          const fName = decode.user.fullName;
          arr.push(fName);
          setLoginUpdate(arr);
          reset();
        }
      } else {
        loginValidator.current.showMessages();
        forceUpdate(1);
      }
    } catch (err) {
      if (err.response.status === 404) {
        toastr.error("کاربر وجود ندارد");
      }
      if (err.response.status === 422) {
        toastr.error("نام کاربری یا رمزعبور اشتباه است");
      }
    }
    // end validation form
  };

  const handleSubmitRegister = async (e) => {
    forceUpdate(1);
    e.preventDefault();
    const user = { fullName, email, password, confirmPassword };
    console.log(user);
    //start validation form
    try {
      setPasswordConfirmResponse("");
      if (validator.current.allValid()) {
        if (password === confirmPassword) {
          const { status, data } = await registerUser(user);
          if (status === 201) {
            toastr.success("کاربر با موفقیت ساخته شد");
            localStorage.setItem("token", data.token);
            navigate("/");
            reset();
          }
          setToken(true);
        } else {
          setPasswordConfirmResponse("رمزعبورها مطابقت ندارند");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (err) {
      if (err.response.status === 422) {
        toastr.error("کاربر از قبل وجود دارد");
      }
    }
    // end validation form
  };

  return (
    <div>
      <Context.Provider
        value={{
          fullName,
          setFullName,
          email,
          setEmail,
          password,
          setPassword,
          emailLogin,
          setEmailLogin,
          passwordLogin,
          setPasswordLogin,
          confirmPassword,
          setConfirmPassword,
          passwordConfirmResponse,
          validator,
          loginValidator,
          loginUpdate,
          setLoginUpdate,
          handleSubmitLogin,
          handleSubmitRegister,
          token,
          setToken,
        }}>
        {/* <CartHandler /> */}
        {children}
      </Context.Provider>
    </div>
  );
};

export default GlobalState;
