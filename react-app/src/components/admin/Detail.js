import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { Form } from "react-bootstrap";

function Detail({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="icon-group">
          <h3>Hello</h3>
        </div>
        <div className="detail-title">
          <h1 className="title-text">หัวข่าว Title</h1>
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
            <Form.Label className="title-formlabel">Comment</Form.Label>
            <Form.Control
              type="text"
              className="input-box"
              placeholder="Enter your Comment"
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default styled(Detail)`
  .icon-group {
    display: flex;
    margin-top: 30px;
    justify-content: right;
  }
  .detail-title {
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
`;
