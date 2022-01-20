import React,{lazy} from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Component/HomePage/HomePage";
import MainLayout from "../Layouts/MainLayout";
const SingleCourse = lazy(() => import("../Component/Course/SingleCourse"));
const Register = lazy(() => import("../Component/Register/Register"));
const Login = lazy(() => import("./../Component/Login/Login"));
const Courses = lazy(() => import("./../Component/Course/Courses"));
const Cart = lazy(() => import("../Component/Cart/Cart"));
const App = () => {
  return (
    <div>
    
        <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singlecourse" element={<SingleCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </MainLayout>
    </div>
  );
};

export default App;
