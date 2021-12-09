import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import toastr from "toastr";
import { registerUser } from "../Services/userService";
import { loginUser } from "../Services/userService";
import Context from "./Context";

const GlobalState = ({ children, history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [getStorage, setStorage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("fullName");
    setStorage(data);
  }, [getStorage]);

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
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);

    //start validation form
    try {
      if (validator.current.allValid()) {
        const { status, data } = await loginUser(user);
        if (status === 201) {
          toastr.success("ورود موفقیت آمیز بود");
          localStorage.setItem("fullName", data);
          history.replace("/");
          // for rerender
          setStorage("");
        }
        if (status === 203) {
          toastr.error("کاربر وجود ندارد");
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (err) {
      toastr.error("لطفا اتصال اینترنت خودرا بررسی کنید");
    }
    // end validation form
    reset();
  };

  const handleSubmitRegister = async (e) => {
    forceUpdate(1);
    e.preventDefault();
    const user = { fullName, email, password };

    //start validation form
    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          toastr.success("کاربر با موفقیت ساخته شد");
          localStorage.setItem("fullName", fullName);
          history.replace("/");
          // for rerender
          setStorage("");
        }
        if (status === 203) {
          toastr.error("کاربر از قبل وجود دارد");
        }
        localStorage.setItem("fullName", fullName);
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (err) {
      toastr.error("لطفا اتصال اینترنت خودرا بررسی کنید");
      console.log(err);
    }
    // end validation form
    reset();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setStorage("");
  }

  const handleLogout = () => {
    localStorage.removeItem("fullName");
    closeModal();
    setStorage("");
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
          validator,
          getStorage,
          handleSubmitLogin,
          handleSubmitRegister,
          openModal,
          closeModal,
          handleLogout,
          modalIsOpen,
        }}
      >
        {/* <CartHandler /> */}
        {children}
      </Context.Provider>
    </div>
  );
};

export default withRouter(GlobalState);