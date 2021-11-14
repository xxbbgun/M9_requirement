import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

function Comment({ className, data }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="group-thread">
          <Row className="card-thread">
            <Col className="each-card">
              <div className="card-body">
                <Link to={`/user-threadDetail/${data._id}`} className="link-threadDetail">
                  <div className="thread-box">
                    <h4>{data.title}</h4>
                  </div>
                </Link>
                <div className="thread-box">
                  <label className="content-text">{data.content}</label>
                </div>
              </div>
            </Col>
            <Col className="box-delete">
              <div className="icon-group">
                <div className="delete-icon">
                  <DeleteForeverIcon className="delete" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default styled(Comment)`
  .group-thread {
    display: flex;
    justify-content: space-around;
  }
  .card-thread {
    margin-top: 30px;
    transition: 0.5s;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid whitesmoke;
  }
  .card-thread:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
  .each-card {
    display: flex;
    justify-content: left;
  }
  .card-body {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 600px;
  }
  .link-threadDetail {
    text-decoration: none;
    color: #eb1c01;
  }
  .content-text {
      color: gray;
  }
  .box-delete {
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    justify-content: right;
  }
  .delete {
    width: 40px;
    height: 40px;
    color: red;
  }
`;
