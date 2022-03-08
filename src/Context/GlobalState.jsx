import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import toastr from "toastr";
import jwt from "jsonwebtoken";
import { loginUser, loginEndUser } from "../Services/userService";
import Context from "./Context";

const GlobalState = ({ children }) => {
  // const location = useLocation();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [emailLogin, setEmailLogin] = useState("");

  const [, forceUpdate] = useState(false);
  const [loginUpdate, setLoginUpdate] = useState();

  const [token, setToken] = useState(false);

  const [code, setCode] = useState("");
  const [inp, setInp] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const data = localStorage.getItem("fullName");
    setLoginUpdate(data);
  }, [loginUpdate]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    }
  });
  // useEffect(() => {
  //   localStorage.setItem("login", emailLogin);
  // }, [emailLogin]);

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

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = { inp: emailLogin };
    console.log(user);

    //start validation form
    // try {
    if (loginValidator.current.allValid()) {
      const { data } = await loginUser(user);
      setCode(data.code);
      // localStorage.setItem("token", data.token);
      // const decode = jwt.decode(data.token);
      // setToken(true);
      // if (status === 200) {
      // for rerender
      // const arr = [];
      navigate("/auth");
      // const fName = decode.user.fullName;
      // arr.push(fName);
      // setLoginUpdate(arr);
      // setEmailLogin("");
    } else {
      loginValidator.current.showMessages();
      //   toastr.success("ورود موفقیت آمیز بود");
      forceUpdate(1);
    }
    // } catch (err) {
    //   if (err.response.status === 404) {
    //     toastr.error("کاربر وجود ندارد");
    //   }
    //   if (err.response.status === 422) {
    //     toastr.error("نام کاربری یا رمزعبور اشتباه است");
    //   }
    // }
    // end validation form
  };
  const handleSubmitLoginEnd = async (e) => {
    e.preventDefault();
    const user = { inp: localStorage.getItem("login"), fullName };
    //start validation form
    try {
      if (loginValidator.current.allValid()) {
        if (code === parseInt(inp)) {
          const { status, data } = await loginEndUser(user);
          if (data.token) localStorage.setItem("token", data.token);
          console.log(status, data);
          if (status === 200) {
            toastr.success(" .ورود موفقیت آمیز بود");
            localStorage.removeItem("login");
            navigate("/");
          }
          if (status === 203) {
            handleOpen();
          }
          if (status === 201) {
            toastr.success("به پونس خوش آمدید");
            localStorage.removeItem("login");
            navigate("/");
          }
          // for rerender
          // const arr = [];
          // const fName = decode.user.fullName;
          // arr.push(fName);
          // setLoginUpdate(arr);
          setEmailLogin("");
        } else {
          toastr.error("کد وارد شده صحیح نیست");
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


  return (
    <div>
      <Context.Provider
        value={{
          fullName,
          setFullName,
          // email,
          // setEmail,
          emailLogin,
          setEmailLogin,
          validator,
          loginValidator,
          loginUpdate,
          setLoginUpdate,
          handleSubmitLogin,
          handleSubmitLoginEnd,
          // handleSubmitRegister,
          token,
          setToken,
          code,
          inp,
          setInp,
          open,
          handleOpen,
          handleClose,
        }}>
        {/* <CartHandler /> */}
        {children}
      </Context.Provider>
    </div>
  );
};

export default GlobalState;
