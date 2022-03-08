import React from "react";
import courses from "./Courses.json";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  // go to singleCourse page
  const goToCourse = (id) => {
    localStorage.setItem("singleCourse", JSON.stringify(id));
  };
  // end go to singleCourse page

  return (
    <div>
      <CartContext.Provider
        value={{
          goToCourse,
        }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartState;
