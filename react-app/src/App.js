import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import NavUser from './components/navbar/NavUser';
import AddNews from "./components/admin/AddNews";
import Detail from "./components/admin/Detail";
import EditNew from "./components/admin/EditNew";

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
          <NavUser />
        </Route>
        <Route path="/admin-detail">
          <Detail />
        </Route>
        <Route path="/add-news">
          <AddNews />
        </Route>
        <Route path="/edit-news">
          <EditNew />
        </Route> 
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
