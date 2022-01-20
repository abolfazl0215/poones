import React, { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Courses from "./../Course/Courses";
import Article from "./../Article/Article";

const HomePage = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div>
      <Section1 />
      <Section2 />
      <Courses />
      <Article />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default React.memo(HomePage);
