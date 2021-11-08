import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

function AddNews({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="addnews-headline">
          <h1 className="headline-text">ADD NEWS</h1>
        </div>
        <div className="addnews-form">
          <Form className="form-body">
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Choose Image</Form.Label>
              <div className="btn-selectfile">
                <Button type="submit" className="text-selectfile">
                  Select files
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Headline</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Headline"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">News Type</Form.Label>
              <Form.Select className="input-box">
                <option className="text-input">Select your News Type</option>
                <option value="1" className="text-input">General News & Current Affairs</option>
                <option value="2" className="text-input">Business, Finance & Economics</option>
                <option value="3" className="text-input">Health & Medicine</option>
                <option value="4" className="text-input">Entertainment, Art & Culture</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="input-box"
                placeholder="Enter your Description"
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
