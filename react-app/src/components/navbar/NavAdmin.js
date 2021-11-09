import React from "react";
import styled from "styled-components";
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";

function NavUser({ className }) {
  return (
    <div className={className}>
      <Navbar className="navbar" variant="light">
        <Container>
          <NavLink to="/admin-home" className="web-logo">
            <div className="logo">
              <img
                src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
                className="logo-image"
                alt="logo"
              />
            </div>
          </NavLink>
          <div className="navbar-icon">
            <div className="add-icon">
              <Link to="/add-news">
                <AddIcon className="add-image" />
              </Link>
            </div>
            <div className="user">
              <AccountCircleIcon className="user-image" />
            </div>
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
  .navbar-icon {
    display: flex;
  }
  .add-icon {
    margin-right: 10px;
  }
  .add-image {
    color: white;
    width: 35px;
    height: 35px;
  }
  .user-image {
    color: white;
    width: 35px;
    height: 35px;
  }
`;
