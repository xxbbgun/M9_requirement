import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {useHistory } from "react-router-dom";
import { fetchQuestions } from "../../ActionAndStore/Question/action";
import {useDispatch } from "react-redux";
function AddThread({ className }) {
  const [role] = React.useState(JSON.parse(localStorage.getItem("role")));
  const dispatch = useDispatch();
  const date = new Date().toLocaleString();
  const [Title, setTitle] = React.useState("");
  const [type, setType] = React.useState("")
  const [content, setContent] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [dates, setDate] = React.useState(date)
  const history = useHistory();
  const addThread = (event) => {
    event.preventDefault();
    setDate(date);
    let data = {
      Title: Title,
      type: type,
      content: content,
      description: description,
      dates: dates
    }
    axios.post("http://128.199.117.96:5000/question/AddQuestion",data).then((res) => {
      if(role === 'admin'){
        history.push("/admin-thread");
      }else {
        history.push("/user-thread");
      }
    })
   
   
    


  
   
  }
  return (
    <div className={className}>
      <div className="container">
        <div className="addthread-headline">
          <h1 className="headline-text">ADD THREAD</h1>
        </div>
        <div className="addthread-form">
          <Form className="form-body" onSubmit={addThread} >
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Title</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Title"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">News Type</Form.Label>
              <Form.Select className="input-box" onChange={(event) => setType(event.target.value)} required>
                <option className="text-input">Select your News Type</option>
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
                <option value="Food & Drink" className="text-input">
                Food & Drink
                </option>
                
                <option value="Horoscope" className="text-input">
                Horoscope
                </option>
                
                
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Content</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Content"
                onChange={(event) => setContent(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="input-box"
                placeholder="Enter your Description"
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </Form.Group>

            <div className="btn-post">
              <Button type="submit" className="text-post" >
                POST
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default styled(AddThread)`
  .addthread-headline {
    display: flex;
    margin-top: 30px;
  }
  .headline-text {
    color: #eb1c01;
  }
  .title-formlabel {
    color: #eb1c01;
  }
  .text-selectfile {
    background-color: gray;
    border: none;
  }
  .input-box {
    background-color: #f4f0f0;
    border: none;
  }
  .text-input {
    color: gray;
  }
  .btn-post {
    display: flex;
    margin-top: 50px;
    justify-content: right;
  }
  .text-post {
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
  }
`;
