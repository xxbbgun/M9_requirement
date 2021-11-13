import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

function AddThread({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="addnews-headline">
          <h1 className="headline-text">ADD THREAD</h1>
        </div>
        <div className="addnews-form">
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

export default styled(AddThread)``;
