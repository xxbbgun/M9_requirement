import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Signin from "./components/login/Signin";
import AddNews from "./components/admin/AddNews";
import Detail from "./components/admin/Detail";

function App() {
  return (
    <>
      <Switch>
        <Route path="/add-news">
          <AddNews />
        </Route>
        <Route path="/admin-detail">
          <Detail />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
        <Route path="/sign-up">{/* <SignUp /> */}</Route>
      </Switch>
    </>
  );
}

export default App;
