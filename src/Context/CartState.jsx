import React, { useState } from "react";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  const [cartLength, setCartLength] = useState();

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
          cartLength,
          setCartLength,
        }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartState;
