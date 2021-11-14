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
import Notification from "./components/Notification.js/Notification";
import Footer from "./components/footer/Footer";
import Thread from "./components/Thread/Thread";
import AddThread from "./components/Thread/AddThread";
import io from "socket.io-client";
import ThreadDetail from "./components/Thread/ThreadDetail";

const socket = io.connect("http://localhost:5000");
function App() {
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
          <Detail socket={socket} />
        </Route>
        <Route path="/admin-home">
          <NavAdmin />
          <Home />
        </Route>
        <Route path="/admin-detail/:id">
          <NavAdmin />
          <EditAndDeleteIcon />
          <Detail socket={socket} />
        </Route>
        <Route path="/admin-thread">
          <NavAdmin />
          <Thread />
        </Route>
        <Route path="/admin-threadDetail/:id">
          <NavAdmin />
          <ThreadDetail />
        </Route>
        <Route path="/admin-addthread">
          <NavAdmin />
          <AddThread />
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
        <Route path="/notification">
          <NavUser />
          <Notification />
          <Footer />
        </Route>
        <Route path="/user-thread">
          <NavUser />
          <Thread />
        </Route>
        <Route path="/user-threadDetail/:id">
          <NavUser />
          <ThreadDetail />
        </Route>
        <Route path="/user-addthread">
          <NavUser />
          <AddThread />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
