import React from "react";
import { Route, Switch } from "react-router";
import SingleCourse from "../Component/Course/SingleCourse";
import HomePage from "../Component/HomePage/HomePage";
import Register from "../Component/Login/Register";
import MainLayout from "../Layouts/MainLayout";
const App = () => {
  return (
    <div>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/singlecourse" component={SingleCourse} />
        </Switch>
      </MainLayout>
    </div>
  );
};

export default App;
