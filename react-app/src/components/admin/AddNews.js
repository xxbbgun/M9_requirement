import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

function AddNews({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="addnews-title">
          <h1 className="title-text">ADD NEWS</h1>
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
              <Form.Label className="title-formlabel">Title</Form.Label>
              <Form.Control type="text" className="input-box" placeholder="Enter your Title" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Headline</Form.Label>
              <Form.Control type="text" className="input-box" placeholder="Enter your Headline" />
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
  .addnews-title {
    display: flex;
    margin-top: 30px;
  }
  .title-text {
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
      background-color: #F4F0F0;
      border: none;
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
