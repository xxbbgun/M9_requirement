import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import NavAdmin from "../navbar/NavAdmin";
import Footer from "../footer/Footer";
import axios from "axios";
import {useHistory } from "react-router-dom";

function AddNews({ className }) {
  const date = new Date().toLocaleString();
  const [Headline, setHeadline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("")
  const [dates, setDate] = React.useState(date)
  const [type, setType] = React.useState("")
  const history = useHistory();


  const addNews = (event) => {
    event.preventDefault();
    setDate(date);
    const formData = new FormData();
    formData.append("Headline", Headline);
    formData.append("Content", content);
    formData.append("description", description);
    formData.append("image", image);    
    formData.append("DateTime", dates);
    formData.append("type", type);
    
    let data = axios.post("http://localhost:5000/feed/AddFeed",formData)
    if(data){
      history.push("/admin-home");
    }
    


  
   
  }

  
  // function alertSuccess() {
  //   Swa.fire({
  //     title: "success",
  //     text: "success",
  //     confirmButtonColor: "#005488",
      
  //   });
  // }

  return (
    <div className={className}>
      <NavAdmin />
      <div className="container">
        <div className="addnews-headline">
          <h1 className="headline-text">ADD NEWS</h1>
        </div>
        <div className="addnews-form">
          <Form className="form-body" onSubmit={addNews} enctype="multipart/form-data">
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Choose Image</Form.Label>
              <div className="btn-selectfile">
                <Form.Control
                type="file"
                className="input-box"
                onChange={(event) => setImage(event.target.files[0])}
              />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Headline</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Headline"
                onChange={(event) => setHeadline(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="input-box"
                placeholder="Enter your Content"
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">News Type</Form.Label>
              <Form.Select className="input-box" onChange={(event) => setType(event.target.value)}>
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
                
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="input-box"
                placeholder="Enter your Description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <div className="btn-post">
              <Button type="submit" className="text-post">
                POST
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default styled(AddNews)`
  .addnews-headline {
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
