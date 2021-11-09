import React,{useState} from 'react';
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
function Signup({ className }) {
    const [name] = useState("");
    const [email] = useState("");
    const [password] = useState("");
    const [confirmpassword] = useState("");
    const history = useHistory();

    const addUser = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/user/sign-up', {
            name: name,
            email: email,
            password: password,
            confirmpassword:confirmpassword
        }).then((response) => {
            //event.preventDefault()
            localStorage.setItem(`token`, JSON.stringify(response.data.token));
            history.push('/home')
        });
    };
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
                <div className="register">
                    <div className="title">
                        <h1>REGISTER </h1>
                    </div>
                    <Form className="form">
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="text"  name="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email"  name="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password"  name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="password"  name="confirmpassword" placeholder="Confirm Password" />
                        </Form.Group>
                    </Form>
                    <Button className="button" fullWidth onClick={addUser}>SIGNUP</Button>
                    <div className="signup">
                        <h1>Already have account,</h1>
                        <Link to="/sign-in" className="signin">Sign in here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Signup)`
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
.register{
    height: 100vh;
    width: 60vw;
}
.title>h1{
    color:#EB1C01;
    margin-left:37%;
    margin-top: 120px;
}
.form{
    width: 70vh;
    margin-left: 20%;
    margin-top: 50px;
}
.button{
    background: -webkit-linear-gradient(left, #EB1C01 , #FF7F01); 
    border:none;
    color:white;
    text-transform: inherit;
    border-radius: 5px;
    margin-top: 20px;
    width: 15vw;
    margin-left: 35%;
}
.signup{
    display: flex;
    margin-top: 20px;
    margin-left: 30%;
}
.signup>h1{
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
}
.signin{
    text-decoration: none;
    margin-top: 20px;
    color: -webkit-linear-gradient(left, #EB1C01 , #FF7F01); 
}
`;
