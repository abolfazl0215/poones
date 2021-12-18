import React, { useEffect, useState } from "react";
import toastr from "toastr";
import _courses from "./Courses.json";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [singleCourse, setSingleCourse] = useState("");
  const [cartShop, setCartShop] = useState([]);

  const setCourse = () => {
    localStorage.setItem("courses", JSON.stringify(_courses));
  };

  const getCourses = () => {
    const allCourse = localStorage.getItem("courses");
    const parseCourse = JSON.parse(allCourse);
    setCourses(parseCourse);
  };
  // go to singleCourse page
  const goToCourse = (id) => {
    const course = courses.find((p) => p.id === id);
    const _course = course;
    localStorage.setItem("singleCourse", JSON.stringify(_course));
    setSingleCourse(course);
  };
  // end go to singleCourse page

  // go to shoppingCart page
  const goToCart = (name) => {
    // set toast
    if (cartShop) {
      const _filteredCourse = cartShop.find(
        (p) => p.name === singleCourse.name
      );
      if (!_filteredCourse) {
        toastr.success("دوره با موفقیت به سبدخرید شما اضافه شد");
      } else {
        toastr.error("دوره موردنظر در سبدخرید موجود است");
      }
      console.log(_filteredCourse);
    }
    // end set toast
    if (localStorage.getItem("cart")) {
      const filterCourse = cartShop.filter((p) => p.name === name);
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
      toastr.success("دوره با موفقیت به سبدخرید شما اضافه شد");
    }

    const parseCart = JSON.parse(localStorage.getItem("cart"));
    setCartShop(parseCart);
  };
  // end go to shoppingCart page

  const deleteFromCart = (id) => {
    // alert(id);
    const filteredCart = cartShop.filter((p) => p.id !== id);
    if (cartShop.length <= 1) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", filteredCart);
    }
    setCartShop(filteredCart);
    toastr.warning("دوره موردنظر از سبدخرید حذف شد");
  };

  useEffect(() => {
    setCourse();
    getCourses();
    const parseCart = JSON.parse(localStorage.getItem("cart"));
    setCartShop(parseCart);
    const parseSingleCourse = JSON.parse(localStorage.getItem("singleCourse"));
    setSingleCourse(parseSingleCourse);
  }, []);

  return (
    <div>
      <CartContext.Provider
        value={{
          courses,
          singleCourse,
          goToCourse,
          goToCart,
          cartShop,
          deleteFromCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartState;
