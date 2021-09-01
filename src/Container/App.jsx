import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../Component/HomePage/Footer";
import Section1 from "../Component/HomePage/Section1";
import Section2 from "../Component/HomePage/Section2";
import Section3 from "../Component/HomePage/Section3";
import Section4 from "../Component/HomePage/Section4";
import Section5 from "../Component/HomePage/Section5";
import Register from "../Component/Login/Register";
import Nav from "../Component/Nav/Nav";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Nav />
      {/* <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/> */}
      <Register />
      {/* <Footer /> */}s
    </div>
  );
};

export default App;
