import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchQuestions } from "../../ActionAndStore/Question/action";
import GetThread from "./GetThread";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Thread({ className }) {
  const question = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    const getQuestion = () => {
      axios
        .get("http://localhost:5000/question/GetQuestion")
        .then((res) => {
          dispatch(fetchQuestions(res.data));
        })
        .catch(() => {
          console.log("error");
        });
    };
    getQuestion();
  }, [dispatch]);

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
            <Col className="category-group" lg={3} md={6} sm={12}>
              <div className="category-card">
                <div className="card-image">
                  <img
                    className="image-category"
                    variant="top"
                    src="https://dexam.co.uk/wp/wp-content/uploads/2019/06/beeswaxwrapsdexam.jpg"
                  />
                </div>
                <div className="card-title">
                  <h5>Food & Drink</h5>
                </div>
              </div>
            </Col>
            <Col className="category-group" lg={3} md={6} sm={12}>
              <div className="category-card">
                <div className="card-image">
                  <img
                    className="image-category"
                    variant="top"
                    src="https://media.glamourmagazine.co.uk/photos/6138a211aa3b5acf3b0dc453/16:9/w_2560%2Cc_limit/horroscope-hero.jpg"
                  />
                </div>
                <div className="card-title">
                  <h5>Horoscope</h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="btn-addthread">
          <Link to="/user-addthread" className="link-addthread">
            <Button variant="outlined" startIcon={<AddIcon />}>
              ADD THREAD
            </Button>
          </Link>
        </div>
        <div className="question">
          <Row>
            {question.map((data) => {
              return <GetThread key={data._id} data={data} />;
            })}
          </Row>
        </div>
      </div>
      <Footer />
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
  .btn-addthread {
    display: flex;
    justify-content: right;
    margin-top: 30px;
    margin-right: 30px;
  }
  .link-addthread {
    text-decoration: none;
  }
  .card-title {
    text-align: center;
    margin-top: 15px;
  }
`;
