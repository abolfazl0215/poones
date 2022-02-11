import React, { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Article from "./../Article/Article";
import AllCourse from "../Course/AllCourse";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <title>پونس | آموزش تخصصی برنامه نویسی و طراحی سایت </title>
        <meta
          name="description"
          content="پونس آموزش تخصصی برنامه نویسی و طراحی وب با پشتیبانی رایگان مربی"
        />
        <meta
          name="keywords"
          content="پونس , طراحی سایت , طراحی وب"
        />
        <meta property="og:locale" content="fa" />
        <meta property="og:brand" content="پونس" />
      </Helmet>
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
