import React,{lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
const AllCourse= lazy(() => import("../Component/Course/AllCourse"));
const Home= lazy(() => import( "../Component/HomePage/Home"));
const MainLayout = lazy(() => import("../Layouts/MainLayout"));
const SingleCourse = lazy(() => import("../Component/Course/SingleCourse"));
const Register = lazy(() => import("../Component/Register/Register"));
const Login = lazy(() => import("./../Component/Login/Login"));
const Cart = lazy(() => import("../Component/Cart/Cart"));
const App = () => {
  return (
    <div>
    <Suspense fallback={<div className="mt-28 p-12 font-extrabold text-center bg-red-100">الان میاد ...</div>}>
    <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<AllCourse />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singlecourse" element={<SingleCourse />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </MainLayout>
      </Suspense>
    </div>
  );
};

export default App;
