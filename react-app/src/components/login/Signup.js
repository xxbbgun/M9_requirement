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
          <div className="register">
            <div className="box-register">
              <div className="title">
                <h1>REGISTER </h1>
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
              <Button className="button" fullWidth onClick={addUser}>
                SIGNUP
              </Button>
              <div className="signup">
                <h1>Already have account,</h1>
                <Link to="/sign-in" className="signin">
                  Sign in here
                </Link>
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
  .register {
    height: 90vh;
    width: 60vw;
    background-color: whitesmoke;
    margin-top: 40px;
  }
  .title > h1 {
    color: #eb1c01;
    margin-left: 10%;
    margin-top: 120px;
    font-weight: 700;
    font-size: 50px;
  }
  .box-form {
    display: flex;
  }
  .form {
    width: 70vh;
    margin-left: 10%;
    margin-right: 8%;
    margin-top: 50px;
  }
  .box-btn {
    display: flex;
  }
  .button {
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
    color: white;
    text-transform: inherit;
    border-radius: 5px;
    margin-top: 20px;
    width: 15vw;
    margin-left: 10%;
  }
  .signup {
    display: flex;
    margin-top: 10px;
    margin-left: 0%;
  }
  .signup > h1 {
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
  }
  .signin {
    text-decoration: none;
    margin-top: 20px;
    color: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
  }
`;
