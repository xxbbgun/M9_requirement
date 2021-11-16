import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "react-bootstrap";
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
  const [role] = React.useState(JSON.parse(localStorage.getItem("role")));
  const [type, setType] = React.useState("");
  const dispatch = useDispatch();

  function useSearch(event) {
    axios
      .get(`http://128.199.117.96:5000/question/Category/${type}`)
      .then((res) => {
        dispatch(fetchQuestions(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const getQuestion = () => {
      axios
        .get("http://128.199.117.96:5000/question/GetQuestion")
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
            <Form.Group className="mb-2 mt-2">
              <Form.Select
                className="input-box"
                onChange={(event) => setType(event.target.value)}
                onClick={useSearch}
              >
                <option className="text-input">Category</option>
                <option
                  value="General News & Current Affairs"
                  className="text-input"
                >
                  General News & Current Affairs
                </option>
                <option
                  value="Business, Finance & Economics"
                  className="text-input"
                >
                  Business, Finance & Economics
                </option>
                <option value="Health & Medicine" className="text-input">
                  Health & Medicine
                </option>
                <option
                  value="Entertainment, Art & Culture"
                  className="text-input"
                >
                  Entertainment, Art & Culture
                </option>
                <option
                  value="Food & Drink
                "
                  className="text-input"
                >
                  Food & Drink
                </option>
                <option value="Horoscope" className="text-input">
                  Horoscope
                </option>
              </Form.Select>
            </Form.Group>
          </Row>
        </div>
        <div className="btn-addthread">
          {role === "admin" ? (
            <Link to="/admin-addthread" className="link-addthread">
              <Button variant="outlined" startIcon={<AddIcon />}>
                ADD THREAD
              </Button>
            </Link>
          ) : (
            <Link to="/user-addthread" className="link-addthread">
              <Button variant="outlined" startIcon={<AddIcon />}>
                ADD THREAD
              </Button>
            </Link>
          )}
        </div>
        <div className="question">
          <Row>
            {question ? (
              question.map((data) => {
                return <GetThread key={data._id} data={data} />;
              }).reverse()
            ) : (
              <div>loading...</div>
            )}
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
