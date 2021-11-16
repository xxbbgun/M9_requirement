import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";
function NavUser({ className }) {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    history.push("/sign-in");
  };

  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const [name] = React.useState(JSON.parse(localStorage.getItem("name")));


  const [data] = React.useState(JSON.parse(localStorage.getItem("name")));
  if (!data) {
  return <Redirect to="/sign-in" />
}


  return (
    <div className={className}>
      <div className="Navbar">
        <div className="Wedsite">
          <h3>Camt Times</h3>
        </div>
        <div className="detail">
          <div className="nav">
            <NavLink to="/admin-home" className="link">Home </NavLink>
            <NavLink to="/admin-news" className="link">News </NavLink>
            <NavLink to="/add-news" className="link">Add News </NavLink>
            <NavLink to="/admin-thread" className="link">Thred </NavLink>
          </div>
          <div className="admin-logout">
            <div className="admin">
              <h3>Hello, {name}</h3>
              <NavLink to="/" className="link" onClick={logout}>
                Log Out
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default styled(NavUser)`
.Wedsite{
  font-family: UnifrakturCook;
  text-align: center;
  margin-top: 30px;
}
.Wedsite>h3{
  font-size: 60px;
}
.detail {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  height: 45px;
  padding: 10px;
  border-top: 1px solid lightgray;
  border-bottom: double 5px black;
  color: #868686;
  position: relative;
}
.nav {
  margin-left: 70px;
}
.admin {
  display: flex;
  justify-content: right;
}
.admin >h3{
  color: black;
  font-size: 15px;
  margin-left: 50px;
  margin-top: 2px;
}
.link {
  text-decoration: none;
  color: 	gray;
  font-size: 15px;
  margin-left: 40px;;

}
.admin-logout {
  margin-right: 100px;
}
`;
