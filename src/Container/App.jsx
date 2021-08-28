import React from "react";
import Footer from "../Component/HomePage/Footer";
import Section1 from "../Component/HomePage/Section1";
import Section2 from "../Component/HomePage/Section2";
import Section3 from "../Component/HomePage/Section3";
import Section4 from "../Component/HomePage/Section4";
import Section5 from "../Component/HomePage/Section5";
import Login from "../Component/Login/Login";
import Nav from "../Component/Nav/Nav";
const App = () => {
  return (
    <div>
      <Nav />
      {/* <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/> */}
      <Login />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
