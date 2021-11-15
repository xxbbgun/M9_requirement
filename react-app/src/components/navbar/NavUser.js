import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Container, Form } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchNews } from "../../ActionAndStore/News/action";
import AddCommentIcon from '@mui/icons-material/AddComment';

function NavUser({ className }) {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    history.push("/sign-in");
  };
  
  const dispatch = useDispatch();
  const [name] = React.useState(JSON.parse(localStorage.getItem("name")));


  return (
    <div className={className}>
      <Navbar className="navbar" variant="light">
        <Container>
          <div className="web-logo">
            <div className="logo">
              <a href="/home">
                <img
                  src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
                  className="logo-image"
                  alt="logo"
                />
              </a>
            </div>

          </div>

         

          <div className="question-page">
            <NavLink to="/user-thread" className="link">
              <AddCommentIcon />
            </NavLink>
          </div>

          <div className="user">
            <h3>Hello, {name}</h3>
            <NavLink to="/" className="link" onClick={logout}>
              Log Out
            </NavLink>
          </div>
        
        </Container>
      </Navbar>
    </div>
  );
}

export default styled(NavUser)`
  .navbar {
    background-color: #eb1c01;
  }
  .me-auto .menu-text {
    color: white;
    text-decoration: none;
    margin-right: 15px;
  }
  .logo {
    display: flex;
    justify-content: left;
    width: 100%;
  }
  .logo-image {
    width: 80px;
  }
  .web-logo {
    display: flex;
  }
  .user {
    display: flex;
    justify-content: right;
  }
  .user >h3{
    color: white;
    font-size: 18px;
    margin-left: 15px;
    margin-top: 8px;
  }
  .user-image {
    color: white;
    width: 35px;
    height: 35px;
  }
  .link {
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin-left: 15px;
    margin-top: 5px;
  }
  .nav-dropdown > a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }
`;
