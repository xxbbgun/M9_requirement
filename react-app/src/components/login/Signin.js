import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Form, Button,Container } from "react-bootstrap";
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
      .post(process.env.REACT_APP_BACKEND+"/user/sign-in", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem(`token`, JSON.stringify(res.data.token));
        localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
        localStorage.setItem(`role`, JSON.stringify(res.data.user.role));
        dispatch(fetchCustomer(res.data));
        if(res.data.user.role === "admin"){
          history.push("/admin-home");
        }else{
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
      url: process.env.REACT_APP_BACKEND+"/user/signin/google",
      data: { tokenId: response.tokenId },
    }).then((res) => {
      localStorage.setItem(`token`, JSON.stringify(res.data.token));
      localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
      localStorage.setItem(`role`, JSON.stringify(res.data.user.role));
      dispatch(fetchCustomer(res.data));
      history.push("/home");
    })

  };

  return (
    <div className={className}>
      <Container>
      <div className="body">
        <div className="bg">
          <div className="logo">
            <img
              src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
              alt="logo"
            />
          </div>
          <div className="name">
            <h1>Camt Time  </h1>
          </div>
          <div className="description">
            <h1> Description </h1>
          </div>
        </div>
        <div className="login">
          <div className="title">
            <h1>SIGN IN </h1>
          </div>

          <Form className="form">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <GoogleLogin
                clientId="292061599755-9ooqp99oqcankjdso51rqt1253s1fjbr.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="btnGoogle"
              />
              <div className="or">
                <h3>OR</h3>
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
          <div className="signin">
            <Button className="button" onClick={login}>
              LOGIN
            </Button>

            <h1>If you are new user,</h1>
            <Link to="/sign-up" className="signup">
              Sign up here
            </Link>
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
    background-color:#CC0000;
    margin-top: 40px;
  }
  .logo > img {
    width: 80%;
    height: auto;
    margin-top: 120px;
    margin-left: 8%;
  }
  .name > h1 {
    font-size: 50px;
    color: white;
    margin-left: 30%;
    font-family: UnifrakturCook;
  }
  .description > h1 {
    font-size: 20px;
    color: white;
    margin-left: 20%;
  }
  .login {
    height: 90vh;
    width: 60vw;
    background-color: whitesmoke;
    margin-top: 40px;
  }
  .title > h1 {
    color: #eb1c01;
    margin-left: 25%;
    margin-top: 120px;
    font-weight: 700;
    font-size: 50px;
  }
  .or > h3 {
    color: #eb1c01;
    margin-left: 10%;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;

  }
  .form {
    width: 70vh;
    margin-left: 25%;
    margin-top: 50px;
  }
  .button {
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
    color: white;
    text-transform: inherit;
    border-radius: 5px;
    margin-top: 20px;
    width: 10vw;
    margin-left: 25%;
  }
  .signin {
    display: flex;
  }
  .signin > h1 {
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
  }
  .signup {
    text-decoration: none;
    margin-top: 20px;
    color: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
  }
  .fa-facebook{
    padding-right:10px ;
  }
  .btnFacebook{
    border-radius: 8px;
    margin-left: 40px;
    height: 45px;
  }
  .btnGoogle{
    border-radius: 80px;
  }
`;
