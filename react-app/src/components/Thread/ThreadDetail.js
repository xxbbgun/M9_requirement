import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";

function ThreadDetail({ className }) {
  const { id } = useParams();
  const [questionDetail, setQuestionDetail] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/question/GetQuestionById/${id}`)
      .then((res) => {
        setQuestionDetail(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);

  return (
    <div className={className}>
      <div className="container">
        <div className="detail-title">
          <h1 className="text-title">{questionDetail.title}</h1>
        </div>
        <div className="detail-description">
          <label className="text-desc">{questionDetail.description}</label>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default styled(ThreadDetail)`
  .detail-title {
    display: flex;
    margin-top: 30px;
  }
  .text-desc {
    margin-top: 15px;
  }
`;
