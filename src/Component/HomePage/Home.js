import React, { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Article from "./../Article/Article";
import AllCourse from "../Course/AllCourse";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Section1 />
      <Section2 />
      <AllCourse />
      <Article />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Home;
