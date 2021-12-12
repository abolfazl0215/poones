import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleCourse from "../Component/Course/SingleCourse";
import HomePage from "../Component/HomePage/HomePage";
import Register from "../Component/Register/Register";
import MainLayout from "../Layouts/MainLayout";
import Login from "./../Component/Login/Login";
import Courses from "./../Component/Course/Courses";
import Cart from "../Component/Cart/Cart";
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
