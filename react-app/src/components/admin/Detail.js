import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { Form, Button, Breadcrumb } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import NavAdmin from "../navbar/NavAdmin";
import Footer from "../footer/Footer";

function Detail({ className }) {
  return (
    <div className={className}>
      <NavAdmin />
      <div className="container">
        <div className="breadAndIcon">
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item href="/admin-home" className="bread-home">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item className="bread-type" active>
                Health & Medicine
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="icon-group">
            <div className="edit-icon">
              <Link to="/edit-news">
                <EditIcon className="edit" />
              </Link>
            </div>
            <div className="delete-icon">
              <DeleteForeverIcon className="delete" />
            </div>
          </div>
        </div>

        <div className="detail-headline">
          <h1 className="headline-text">Headline</h1>
        </div>

        <div className="image-box">
          <Image
            src="https://www.hollywoodreporter.com/wp-content/uploads/2020/03/image_from_ios_copy-h_2020.jpg"
            fluid
            className="news-image"
            alt="news-image"
          />
        </div>

        <div className="detail-description">
          <label className="text-desc">
            NBC News anchor Lester Holt, like anyone who works in television
            news right now, has a backup plan. “I have a camera and a setup in
            my condo if it comes to that,” he said. “If I can’t work in [30
            Rock], I’ll be broadcasting from my living room. We do what we have
            to do.” As the novel coronavirus spreads around the United States,
            journalists are confronting significant logistical — and medical —
            challenges in fulfilling their daily mission of telling viewers
            what’s going on. “We’re going to get to a point where everybody is
            going to have some nexus to this infection,” Holt told The Hollywood
            Reporter in an interview. “We also have to be transparent, because
            we have had to change the way we operate in many ways.”
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

export default styled(Detail)`
  .breadAndIcon {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
  }
  .bread-home a {
    text-decoration: none;
    color: gray;
  }
  .bread-type {
    color: black;
  }
  .icon-group {
    display: flex;
  }
  .edit-icon {
    margin-right: 10px;
  }
  .edit {
    width: 38px;
    height: 40px;
    color: black;
  }
  .delete {
    width: 40px;
    height: 40px;
    color: red;
  }
  .detail-headline {
    display: flex;
    margin-top: 30px;
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
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
  }
  .send-icon {
    margin-right: 5px;
  }
`;
