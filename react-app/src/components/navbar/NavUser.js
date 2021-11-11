import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import { Navbar, Container, Form } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { fetchNews } from "../../ActionAndStore/News/action";


function NavUser({ className }) {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    history.push("/sign-in")
  }

  const [type, setType] = useState("");
  const dispatch = useDispatch();

  function useSearch(event) {
    axios.get(`http://localhost:5000/feed/Category/${type}`).then((res) => {
       dispatch(fetchNews(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
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

            <Form.Group className="mb-3">
              <Form.Select
                className="input-box"
                onChange={(event) => setType(event.target.value)}
                onClick={useSearch}

              >
                <option className="text-input">Catergry</option>
                <option value="General News & Current Affairs" className="text-input">
                  General News & Current Affairs
                </option>
                <option value="Business, Finance & Economics" className="text-input">
                  Business, Finance & Economics
                </option>
                <option value="Health & Medicine" className="text-input">
                  Health & Medicine
                </option>
                <option value="Entertainment, Art & Culture" className="text-input">
                  Entertainment, Art & Culture
                </option>
              </Form.Select>
            </Form.Group>

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
