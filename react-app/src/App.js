import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Home from './components/user/Home';
import Detail from "./components/admin/Detail";
import AddNews from "./components/admin/AddNews";
import UserDetail from "./components/user/UserDetail";
function App() {
  return (
    <>
      <Switch>
        <Route path="/sign-up" >
          <Signup />
        </Route>
        <Route path="/sign-in">
          <Signin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user-detail">
          <UserDetail />
        </Route>
        <Route path="/admin-detail">
          <Detail />
        </Route>
        <Route path="/add-news">
          <AddNews />
        </Route> 
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
