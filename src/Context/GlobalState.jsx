import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import toastr from "toastr";
import { registerUser } from "../Services/userService";
import { loginUser } from "../Services/userService";
import Context from "./Context";
import _products from "./Products.json";

const GlobalState = ({ children, history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [getStorage, setStorage] = useState("");

  const [products, setProducts] = useState([]);
  const [singleCourse, setSingleCourse] = useState("");
  const [cartShop, setCartShop] = useState([]);
  const [toast, setToast] = useState([]);

  const setProduct = () => {
    localStorage.setItem("products", JSON.stringify(_products));
  };
  const getProducts = () => {
    const allProduct = localStorage.getItem("products");
    const parseProduct = JSON.parse(allProduct);
    setProducts(parseProduct);
  };
  const goToCourse = (id) => {
    const course = products.find((p) => p.id === id);
    const _course = course;
    localStorage.setItem("singleCourse", JSON.stringify(_course));
    setSingleCourse(course);
  };
  useEffect(() => {
    const data = localStorage.getItem("fullName");
    setStorage(data);
    // console.log(Storage);
  }, [getStorage]);

  const goToCart = (id) => {
    if (localStorage.getItem("cart")) {
      const filterCourse = cartShop.filter((p) => p.id === id);
      if (filterCourse.length <= 0) {
        const _cart = cartShop;
        _cart.push(singleCourse);
        setCartShop(_cart);
        localStorage.setItem("cart", JSON.stringify(cartShop));
      }
    } else {
      const _cart = [];
      _cart.push(singleCourse);
      localStorage.setItem("cart", JSON.stringify(_cart));
      setCartShop(_cart);
    }
    const parseCart = JSON.parse(localStorage.getItem("cart"));
    setCartShop(parseCart);
  };

  const deleteFromCart = (id) => {
    // alert(id);
    const filteredCart = cartShop.filter((p) => p.id !== id);
    if (cartShop.length <= 1) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", filteredCart);
    }
    setCartShop(filteredCart);
  };

  useEffect(() => {
    setProduct();
    getProducts();
    const parseCart = JSON.parse(localStorage.getItem("cart"));
    setCartShop(parseCart);
    const parseSingleCourse = JSON.parse(localStorage.getItem("singleCourse"));
    setSingleCourse(parseSingleCourse);
  }, []);

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
      toastr.error("مشکلی پیش آمده");
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
          products,
          singleCourse,
          goToCourse,
          goToCart,
          cartShop,
          deleteFromCart,
        }}
      >
        {/* <CartHandler /> */}
        {children}
      </Context.Provider>
    </div>
  );
};

export default withRouter(GlobalState);
