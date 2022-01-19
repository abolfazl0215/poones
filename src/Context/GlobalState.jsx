import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import toastr from "toastr";
import { registerUser } from "../Services/userService";
import { loginUser } from "../Services/userService";
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
  const [passwordConfirmResponse,setPasswordConfirmResponse] = useState("")

  const [, forceUpdate] = useState(false);
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
  const loginValidator=useRef(
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
    const user = { email:emailLogin, password:passwordLogin };
    console.log(user);

    //start validation form
    try {
      if (loginValidator.current.allValid()) {
        const { status, data } = await loginUser(user);
        console.log(data)
        if (status === 201) {
          toastr.success("ورود موفقیت آمیز بود");
          localStorage.setItem("fullName", data);
          navigate("/");
          // for rerender
          setStorage(data);
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
    const user = { fullName, email, password , confirmPassword };
    
    //start validation form
    try {

      setPasswordConfirmResponse("")
      if (validator.current.allValid()) {
          if(password === confirmPassword){
          const {status} = await registerUser(user);
          
          if (status === 201) {
            toastr.success("کاربر با موفقیت ساخته شد");
            localStorage.setItem("fullName", fullName);
            navigate("/");
            // for rerender
            setStorage("");
          }
          if (status === 203) {
            toastr.error("کاربر از قبل وجود دارد");
          }
          localStorage.setItem("fullName", fullName);
        } else{
          setPasswordConfirmResponse("رمزعبورها مطابقت ندارند")
        }
      }else {
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
          getStorage,
          setStorage,
          handleSubmitLogin,
          handleSubmitRegister,
        }}
      >
        {/* <CartHandler /> */}
        {children}
      </Context.Provider>
    </div>
  );
};

export default GlobalState;
