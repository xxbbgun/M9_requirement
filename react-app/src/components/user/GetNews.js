import React from "react";
import { Col } from "react-bootstrap";

function GetNews({ data }) {
  return (
    <Col lg={6}>
      <div className="news-image">
        <img src={data.imageUrl} alt={data.Headline} style={{ width: "18rem" }} />
      </div>
    </Col>
  );
}

export default GetNews;
