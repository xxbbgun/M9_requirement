import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Swa from "sweetalert2";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function Signin({ className }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user/sign-in", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem(`token`, JSON.stringify(res.data.token));
        localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
        history.push("/home");
      })
      .catch((error) => {
        alertError(error.response.data);
      });
  };
  const responseGoogle = async (response) => {
    axios({
     method: "post",
     url: "http://localhost:5000/user/signin/google",
     data: {tokenId:response.tokenId},
   }).then((res) =>{
    localStorage.setItem(`token`, JSON.stringify(res.data.token));
    localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
    history.push("/home");
   })

 };
 const signUserInFacebook = async (response) => {
  const { name, email, accessToken, userID } = response;
  const user = { name, email, accessToken, userId: userID };
  const res = await axios({
    method: "post",
    url: "http://localhost:5000/user/signin/facebook",
    data: { user },
  });
    localStorage.setItem(`token`, JSON.stringify(res.data.token));
    localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
    history.push("/home");
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
      <div className="body">
        <div className="bg">
          <div className="logo">
            <img
              src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
              alt="logo"
            />
          </div>
          <div className="name">
            <h1> Website name </h1>
          </div>
          <div className="description">
            <h1> Description </h1>
          </div>
        </div>
        <div className="login">
          <div className="title">
            <h1>LOGIN TO ชื่อเว็บ </h1>
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
               <FacebookLogin
                appId="411525907158319"
                fields="name,email,picture"
                scope="public_profile, email"
                callback={signUserInFacebook}
                cssClass="btnFacebook"
                icon="fa-facebook"
              />
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
    </div>
  );
}

export default styled(Signin)`
.btnFacebook { 
  width: 192px;
  height:47px;  
  border-radius: 4px;
  background: #3b5998;
  color:white;
  border:0px transparent;  
  text-align: center;
  margin:5px;
  display: inline-block;
}
  .body {
    display: flex;
  }
  .bg {
    height: 100vh;
    width: 40vw;
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
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
    margin-left: 20%;
  }
  .description > h1 {
    font-size: 20px;
    color: white;
    margin-left: 20%;
  }
  .login {
    height: 100vh;
    width: 60vw;
  }
  .title > h1 {
    color: #eb1c01;
    margin-left: 35%;
    margin-top: 30px;
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
`;
