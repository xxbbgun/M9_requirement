import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

function AddThread({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="addthread-headline">
          <h1 className="headline-text">ADD THREAD</h1>
        </div>
        <div className="addthread-form">
          <Form className="form-body">
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Title</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Content</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Content"
              />
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
