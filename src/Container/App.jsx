import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AllCourse from "../Component/Course/AllCourse/AllCourse";
import SingleCourse from "../Component/Course/SingleCourse/SingleCourse";
import Register from "../Component/Register/Register";
import Login from "./../Component/Login/Login";
import Auth from "./../Component/Login/Auth";
import Cart from "../Component/Cart/Cart";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Component/HomePage/Home";
const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="mt-28 p-12 font-extrabold text-center bg-red-100">
            الان میاد ...
          </div>
        }>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourse />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/singlecourse" element={<SingleCourse />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </div>
  );
};

export default App;
