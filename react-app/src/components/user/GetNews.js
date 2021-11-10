import React from "react";
import styled from "styled-components";
import { Col,Card,Row } from "react-bootstrap";

function GetNews({ className, data }) {
  return (
    <div className={className}>
      <div className="news">
        <Col lg={6}>
          <div className="news-image">
            <img src= {require(`../../uploads/${data.imageUrl}`).default} alt={data.imageUrl} style={{ width: "18rem" }} />
           
          </div>
        </Col>
        <Row>
          <Col lg={12}>
            <Card.Body className="body">
              <h1>{data.Headline}</h1>
              {/* <h2>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </h2> */}
            </Card.Body>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default styled(GetNews) `
.news{
  margin-top: 50px;
  display: flex;
}
.body>h1{
  font-size: 20px;
}
.body>h2{
  font-size: 18px;
}
.news-image{
  
}
`;
