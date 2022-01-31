import React from "react";
import { render } from "react-dom";
import App from "./Container/App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./Context/GlobalState.jsx";
import CartState from "./Context/CartState";

render(
  <BrowserRouter>
    {" "}
    <GlobalState>
      <CartState>
        <App />
      </CartState>
    </GlobalState>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
