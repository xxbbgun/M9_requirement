import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function Comment({ className }) {

  return (
    <div className={className}>
      <div className="container">
        <div className="group-thread">
          <Row className="card-thread">
            <Col className="each-card">
              <div className="card-body">
                <div className="group-thread-title">
                  <div className="thread-username">
                    <h4>John</h4>
                  </div>
                  <div className="thread-time">
                    <h4>14/11/2021, 4:42:56 PM</h4>
                  </div>
                </div>
                <div className="thread-box">
                  <label>WOW</label>
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
    width: 80%;
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
  /* .each-card {
    transition: 0.5s;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid whitesmoke;
  }
  .each-card:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  } */
  .card-body {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 600px;
  }
  .group-thread-title {
    display: flex;
  }
  .thread-username {
    margin-right: 90px;
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
