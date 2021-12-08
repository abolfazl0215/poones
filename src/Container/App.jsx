import React from "react";
import { Route, Switch } from "react-router";
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/singlecourse" component={SingleCourse} />
          <Route path="/courses" component={Courses} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </MainLayout>
    </div>
  );
};

export default App;
