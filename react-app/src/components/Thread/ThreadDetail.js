import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Button, Breadcrumb } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";
import Footer from "../footer/Footer";
import Message from "../comment/Comment";

function ThreadDetail({ className, socket }) {
  const { id } = useParams();
  const [questionDetail, setQuestionDetail] = useState("");
  const date = new Date().toLocaleString();
  const [name] = React.useState(JSON.parse(localStorage.getItem("name")));
  const [dates, setDate] = React.useState(date);
  const [getSocket, setSocket] = useState(socket);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND+`/question/GetQuestionById/${id}`)
      .then((res) => {
        setQuestionDetail(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND+`/comment/commentById/${id}`).then((res) => {
      setChat(res.data);
    });
  }, [id]);

  useEffect(() => {
    socket.on("sendCommentToClient", (msg) => {
      setChat([...chat, msg]);
    });
  });

  useEffect(() => {
    if (getSocket) {
      getSocket.emit("joinRoom", id);
    }
  }, [getSocket, chat]);

  const onMessageSubmit = (e) => {
    setDate(date);
    getSocket.emit("CreateComment", { id, message, name, dates });
    e.preventDefault();
    setMessage("");
  };

  return (
    <div className={className}>
      <div className="container">
     
        <div className="detail-title">
          <h1 className="text-title">{questionDetail.title}</h1>
        </div> 
        <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item className="create" active>
                {`Create at ${questionDetail.DateTime}`}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        <div className="detail-description">
          <label className="text-desc">{questionDetail.description}</label>
        </div>

        <div className="comment-box">
          <Form.Group className="mb-3">
            <Form.Label className="title-formlabel">Add New Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="input-box"
              placeholder="Enter your Comment"
              onChange={(event) => setMessage(event.target.value)}
            />
          </Form.Group>

          <div className="btn-comment">
            <Button
              type="submit"
              className="text-comment"
              onClick={onMessageSubmit}
            >
              <SendIcon className="send-icon" />
              POST
            </Button>
          </div>

          <div className="comment-box">
            {chat.map((chat) => {
              return (
                <Message
                  key={chat._id}
                  name={chat.Name}
                  time={chat.DateTime}
                  message={chat.Message}
                />
              );
            })}
          </div>
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
  .text-title {
    color: #eb1c01;
  }
  .text-desc {
    margin-top: 15px;
  }
  .comment-box {
    margin-top: 50px;
  }
  .input-box {
    border-radius: 15px;
  }
  .btn-comment {
    display: flex;
    margin-top: 20px;
    justify-content: right;
    margin-bottom: 50px;
  }
  .text-comment {
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
  }
  .send-icon {
    margin-right: 5px;
  }
`;
