import React from "react";
// import Footer from "../Component/Footer/Footer";
import Nav from "../Component/Nav/Nav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
