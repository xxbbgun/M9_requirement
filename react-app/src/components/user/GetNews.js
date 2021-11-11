import React from "react";
import styled from "styled-components";
import { Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function GetNews({ className, data}) {
  
  const user = useSelector((state) => state.user);

  return (
    <div className={className}>
      <div className="news">
        <Col lg={3}>
        {user.user.role === 'admin' ? (
          <div className="news-image">
            <Link to={`/admin-detail/${data._id}`}>
              <img
                src={`/uploads/${data.imageUrl}`}
                alt={data.imageUrl}
                style={{ width: "18rem" }}
              />
            </Link>
          </div>
        ):(
          <div className="news-image">
          <Link to={`/user-detail/${data._id}`}>
            <img
              src={`/uploads/${data.imageUrl}`}
              alt={data.imageUrl}
              style={{ width: "18rem" }}
            />
          </Link>
        </div>
        )}
        </Col>
        <Row>
          <Col lg={12}>
            <Card.Body className="body">
              <h1>{data.Headline}</h1>
              <h2>{data.content}</h2>
            </Card.Body>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default styled(GetNews)`
  .news {
    margin-top: 50px;
    display: flex;
  }
  .body > h1 {
    font-size: 20px;
  }
  .body > h2 {
    font-size: 18px;
  }
  .news-image {
  }
`;
