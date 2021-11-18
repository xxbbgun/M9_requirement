import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { Form, Button, Breadcrumb } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";
import Footer from "../footer/Footer";


function GetDetail({ className, data }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="breadAndIcon">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item href="/home" className="bread-home">
               Home
              </Breadcrumb.Item>
              <Breadcrumb.Item className="bread-type" active>
                Health & Medicine
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>

        <div className="detail-headline">
          <h1 className="headline-text"> {data.Headline}</h1>
        </div>

        <div className="image-box">
          <Image
            src={require(`../../uploads/${data.imageUrl}`).default}
            fluid
            className="news-image"
            alt="news-image"
          />
        </div>

        <div className="detail-description">
          <label className="text-desc">
           {data.description}
          </label>
        </div>

        <div className="comment-box">
          <Form.Group className="mb-3">
            <Form.Label className="title-formlabel">Add New Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="input-box"
              placeholder="Enter your Comment"
            />
          </Form.Group>

          <div className="btn-comment">
            <Button type="submit" className="text-comment">
              <SendIcon className="send-icon" />
              POST
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default styled(GetDetail)`
  .breadAndIcon {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .bread-home a {
    text-decoration: none;
    color: gray;
  }
  .bread-type {
    color: black;
  }
  .detail-headline {
    display: flex;
    margin-top: 15px;
  }
  .image-box {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .news-image {
    width: 75%;
    height: auto;
  }
  .text-desc {
    margin-top: 30px;
  }
  .comment-box {
    margin-top: 50px;
  }
  .input-box {
    border-radius: 15px;
  }
  .btn-comment {
    display: flex;
    margin-top: 20px;
    justify-content: right;
    margin-bottom: 50px;
  }
  .text-comment {
    background-color: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
  }
  .send-icon {
    margin-right: 5px;
  }
`;

