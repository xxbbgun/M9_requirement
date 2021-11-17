import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import Swa from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  fetchCustomer,
  getCustomer,
} from "../../ActionAndStore/Customer/action";

function Signup({ className }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  const addUser = (event) => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND + "/user/sign-up", {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      })
      .then((res) => {
        event.preventDefault();
        localStorage.setItem(`token`, JSON.stringify(res.data.token));
        localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
        localStorage.setItem(`role`, JSON.stringify(res.data.user.role));
        dispatch(fetchCustomer(res.data));
        if (res.data.user.role === "admin") {
          history.push("/admin-home");
        } else {
          history.push("/home");
        }
      })
      .catch((error) => {
        alertError(error.response.data.message);
      });
  };

  function alertError(error) {
    Swa.fire({
      icon: "error",
      text: error,
      confirmButtonColor: "#005488",
    });
  }

  return (
    <div className={className}>
      <Container>
        <div className="body">
          <div className="bg">
            <div className="box-logo">
              <div className="logo">
                <div className="logo-image">
                  <img
                    src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="name">
                <div className="name-text">
                  <h1>Camt Time</h1>
                </div>
              </div>
              <div className="description">
                <div className="desc-text">
                  <h1>Real Time News Website</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="register">
            <div className="box-register">
              <div className="title">
                <div className="title-text">
                  <h1>REGISTER</h1>
                </div>
              </div>
              <div className="box-form">
                <Form className="form">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      onChange={(event) =>
                        setconfirmpassword(event.target.value)
                      }
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>

            <div className="box-btn">
              <div className="btnAndsignin">
                <div className="btn-text">
                  <Button className="button" fullWidth onClick={addUser}>
                    SIGNUP
                  </Button>
                </div>
                <div className="signup">
                  <div className="signup-text">
                    <h1>Already have account,</h1>
                  </div>
                  <div className="link-signin">
                    <Link to="/sign-in" className="signin">
                      <label>Sign in here</label>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default styled(Signup)`
  .body {
    display: flex;
  }
  .bg {
    height: 90vh;
    width: 40vw;
    background: -webkit-linear-gradient(left, #b90e29, #f20000);
    margin-top: 40px;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .logo-image > img {
    width: 80%;
    height: auto;
    margin-top: 120px;
    margin-left: 10%;
  }
  .name {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .name-text > h1 {
    font-size: 50px;
    color: white;
    font-family: UnifrakturCook;
  }
  .description {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .desc-text > h1 {
    font-size: 20px;
    color: white;
  }
  .register {
    height: 90vh;
    width: 60vw;
    background-color: whitesmoke;
    margin-top: 40px;
  }
  .title {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .title-text > h1 {
    color: #eb1c01;
    font-weight: 700;
    font-size: 50px;
  }
  .box-form {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
  .form {
    width: 80%;
  }
  .box-btn {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .btnAndsignin {
    display: flex;
    width: 80%;
  }
  .button {
    background-color: #f20000;
    border: none;
    color: white;
    text-transform: inherit;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 15px;
  }
  .signup {
    display: flex;
    margin-top: 23px;
    width: 100%;
    margin-left: 50px;
  }
  .signup-text > h1 {
    font-size: 20px;
    margin-bottom: 0px;
  }
  .link-signin {
    margin-left: 10px;
  }
  .signin {
    text-decoration: none;
  }
`;
