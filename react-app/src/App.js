import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Home from "./components/user/Home";
import AddNews from "./components/admin/AddNews";
import Detail from "./components/user/Detail";
import EditNew from "./components/admin/EditNew";
import Comment from "./components/comment/Comment";
import NavUser from "./components/navbar/NavUser";
import NavAdmin from "./components/navbar/NavAdmin";
import EditAndDeleteIcon from "./components/admin/EditAndDeleteIcon";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

function App() {
  console.log(socket);

  return (
    <>
      <Switch>
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route path="/sign-in">
          <Signin />
        </Route>
        <Route path="/home">
          <NavUser />
          <Home />
        </Route>
        <Route path="/user-detail/:id">
          <NavUser />
          <Detail />
        </Route>
        <Route path="/admin-home">
          <NavAdmin />
          <Home />
        </Route>
        <Route path="/admin-detail">
          <NavAdmin />
          <EditAndDeleteIcon />
          <Detail />
        </Route>
        <Route path="/add-news">
          <AddNews />
        </Route>
        <Route path="/edit-news/:id">
          <EditNew />
        </Route>
        <Route path="/comment">
          <Comment />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
