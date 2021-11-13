import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

function Thread({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="thread-category">
          <Row className="card-container">
            <Col className="category-group" lg={3} md={6} sm={12}>
              <div className="category-card">
                <div className="card-image">
                  <img
                    className="image-category"
                    variant="top"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17735/production/_110135069_uk-election_composite_europe_v2.png"
                  />
                </div>
                <div className="card-title">
                  <h5>General News & Current Affairs</h5>
                </div>
              </div>
            </Col>
            <Col className="category-group" lg={3} md={6} sm={12}>
              <div className="category-card">
                <div className="card-image">
                  <img
                    className="image-category"
                    variant="top"
                    src="https://www.techyon.it/media/news/business_information_manager_ruolo_principali_competenze_1616517022_9.jpg"
                  />
                </div>
                <div className="card-title">
                  <h5>Business, Finance & Economics</h5>
                </div>
              </div>
            </Col>
            <Col className="category-group" lg={3} md={6} sm={12}>
              <div className="category-card">
                <div className="card-image">
                  <img
                    className="image-category"
                    variant="top"
                    src="https://cdn.bangkokhospital.com/2020/04/IHL-C-Health-Promotion.jpg"
                  />
                </div>
                <div className="card-title">
                  <h5>Health & Medicine</h5>
                </div>
              </div>
            </Col>
            <Col className="category-group" lg={3} md={6} sm={12}>
              <div className="category-card">
                <div className="card-image">
                  <img
                    className="image-category"
                    variant="top"
                    src="https://www.indianfolk.com/wp-content/uploads/2017/01/sports_entertainment.jpg"
                  />
                </div>
                <div className="card-title">
                  <h5>Entertainment, Art & Culture</h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default styled(Thread)`
  .thread-category {
    display: flex;
    justify-content: center;
  }
  .card-container {
      margin-top: 30px;
  }
  .card-image {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .image-category {
    width: 80%;
    height: 150px;
  }
  .card-title {
    text-align: center;
    margin-top: 15px;
  }
`;
