import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
function Signin({ className }) {
    return (
        <div className={className}>
            <div className="body">
                <div className="bg">
                    <div className="logo">
                        <img src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png" alt="logo" />
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
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <div className="signin">
                        <Button className="button" fullWidth>LOGIN</Button>
                        <h1>If you are new user,</h1>
                        <Link to="/sign-up" className="signup">Sign up here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Signin)`
.body{
    display: flex;
}
.bg{
    height: 100vh;
    width: 40vw;
    background: -webkit-linear-gradient(left, #EB1C01 , #FF7F01); 
    
}
.logo>img{
    width: 80%;
    height: auto;
    margin-top: 120px;
    margin-left: 8%;
}
.name > h1{
    font-size: 50px;
    color: white;
    margin-left: 20%;
}
.description>h1{
    font-size: 20px;
    color: white;
    margin-left: 20%;
} 
.login{
    height: 100vh;
    width: 60vw;
}
.title>h1{
    color:#EB1C01;
    margin-left:35%;
    margin-top: 30px;
}
.form{
    width: 70vh;
    margin-left: 25%;
    margin-top: 50px;
}
.button{
    background: -webkit-linear-gradient(left, #EB1C01 , #FF7F01); 
    border:none;
    color:white;
    text-transform: inherit;
    border-radius: 5px;
    margin-top: 20px;
    width: 10vw;
    margin-left: 25%;
}
.signin{
    display: flex;
}
.signin>h1{
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
}
.signup{
    text-decoration: none;
    margin-top: 20px;
    color: -webkit-linear-gradient(left, #EB1C01 , #FF7F01); 
}
`;
