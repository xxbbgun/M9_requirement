import React from "react";
import styled from "styled-components";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink ,useHistory} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function NavUser({ className }) {
  const history = useHistory();
  const logout = (event) => {
      event.preventDefault();
      localStorage.removeItem("token");
      history.push("/sign-in")
    }
  return (
    <div className={className}>
      <Navbar className="navbar" variant="light">
        <Container>
          <NavLink to="/home" className="web-logo">
            <div className="logo">
              <img
                src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
                className="logo-image"
                alt="logo"
              />
            </div>
            
            <NavDropdown title="Category" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">General News & Current Affairs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Business, Finance & Economics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Health & Medicine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Entertainment, Art & Culture</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">กระทู้</NavDropdown.Item>
            </NavDropdown>
          </NavLink>

          <div className="user">
            <AccountCircleIcon className="user-image" />
            <NavLink to="/" className="link" onClick={logout}>Log Out</NavLink>
          </div>
          {/* <div className="me-auto">
                        <NavLink to="/" className="menu-text">Home</NavLink>
                        <NavLink to="/" className="menu-text">Features</NavLink>
                        <NavLink to="/" className="menu-text">Pricing</NavLink>
                    </div> */}
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
  .user-image {
    color: white;
    width: 35px;
    height: 35px;
  }
  .link{
    text-decoration: none;
    color:white;
    font-size:18px;
    margin-left: 15px;
    margin-top: 5px;
  }
  .nav-dropdown>a{
    text-decoration: none;
    color:white;
    font-size:18px;
  }
`;
