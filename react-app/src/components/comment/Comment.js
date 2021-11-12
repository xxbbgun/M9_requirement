import React from "react";
import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";

function Comment({ className ,name,time,message}) {
  return (
    <div className={className}>
      <div className="container">
        <Row className="card-comment">
          <Col className="each-card">
            <Card.Body className="card-body">
              <div className="comment-username">
                <Card.Title>{name}{time}</Card.Title>
              </div>
              <div className="comment-box">
                <Card.Text>
                 {message}
                </Card.Text>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default styled(Comment)`
  .container {
    display: flex;
    justify-content: center;
  }
  .each-card {
    margin: 30px;
    transition: 0.5s;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
    border: 1px solid whitesmoke;
  }
  .each-card:hover {
    box-shadow: 0 4px 8px 0 lightgray, 0 6px 20px 0 lightgray;
  }
  .card-body {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
