import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import Swa from "sweetalert2";
import GoogleLogin from "react-google-login";

import { useDispatch } from "react-redux";
import { fetchCustomer } from "../../ActionAndStore/Customer/action";

function Signin({ className }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND + "/user/sign-in", {
        email: email,
        password: password,
      })
      .then((res) => {
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
  const responseGoogle = async (response) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_BACKEND + "/user/signin/google",
      data: { tokenId: response.tokenId },
    }).then((res) => {
      localStorage.setItem(`token`, JSON.stringify(res.data.token));
      localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
      localStorage.setItem(`role`, JSON.stringify(res.data.user.role));
      dispatch(fetchCustomer(res.data));
      history.push("/home");
    });
  };

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
          <div className="login">
            <div className="login-box">
              <div className="title">
                <div className="title-text">
                  <h1>SIGN IN </h1>
                </div>
              </div>
              <div className="box-form">
                <Form className="form">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <div className="box-google">
                      <GoogleLogin
                        clientId="292061599755-9ooqp99oqcankjdso51rqt1253s1fjbr.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        className="btnGoogle"
                      />
                    </div>

                    <div className="or">
                      <div className="or-text">
                        <h3>OR</h3>
                      </div>
                    </div>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="box-btn">
              <div className="btnAndsignup">
                <div className="btn-text">
                  <Button className="button" onClick={login}>
                    LOGIN
                  </Button>
                </div>
                <div className="signin">
                  <div className="signin-text">
                    <h1>If you are new user,</h1>
                  </div>
                  <div className="link-signup">
                    <Link to="/sign-up" className="signup">
                      Sign up here
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

export default styled(Signin)`
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
  .login {
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
  .or {
    display: flex;
    justify-content: center;
  }
  .or-text > h3 {
    color: #eb1c01;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;
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
  .btnAndsignup {
    display: flex;
    width: 80%;
  }
  .button {
    background-color: #eb1c01;
    border: none;
    color: white;
    text-transform: inherit;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 15px;
  }
  .signin {
    display: flex;
    margin-top: 23px;
    width: 100%;
    margin-left: 50px;
  }
  .signin-text > h1 {
    font-size: 20px;
    margin-bottom: 0px;
  }
  .box-google {
    display: flex;
    justify-content: center;
  }
  .btnGoogle {
    border-radius: 80px;
  }
  .link-signup {
    margin-left: 10px;
  }
  .signup {
    text-decoration: none;
  }
`;
