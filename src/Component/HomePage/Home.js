import React, { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Article from "./../Article/Article";
import AllCourse from "../Course/AllCourse/AllCourse";
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
          content="پونس آموزش تخصصی برنامه نویسی و طراحی وب با پشتیبانی vip مربی"
        />
        <meta
          name="keywords"
          content=" آموزش طراحی سایت , آموزش طراحی وب ,آموزش جاوااسکریپت ,جاوااسکریپت ,پونس , طراحی سایت , طراحی وب"
        />
        <meta property="og:locale" content="fa" />
        <meta property="og:brand" content="پونس" />
      </Helmet>
      <h2 className="hidden">
        آموزش تخصصی برنامه نویسی و طراحی سایت پونس با پشتیبانی ویژه و
        کاملا رایگان . دوره html و css . دوره جاوااسکریپت
      </h2>
      <Section1 />
      <Section2 />
      <AllCourse />
      <Section5 />
      <Article />
      <Section4 />
    </div>
  );
};

export default Home;
