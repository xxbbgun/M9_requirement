import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Button, Breadcrumb } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";
import Footer from "../footer/Footer";
import Message from "../../components/comment/Comment";


function Detail({ className ,socket}) {
  const { id } = useParams();
  const date = new Date().toLocaleString();
  const [name] = React.useState(JSON.parse(localStorage.getItem("name")));
  const [dates, setDate] = React.useState(date);
  const [getSocket, setSocket] = useState(socket);
  const [newsDetail, setNews] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND+`/feed/GetFeedById/${id}`)
      .then((res) => {
        setNews(res.data);
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
        setChat([ ...chat,msg])
      });
  },);

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
    <div>
      <div className={className}>
        <div className="container">
          <div className="breadAndIcon">
            <div className="breadcrumb-group">
              <Breadcrumb>
                <Breadcrumb.Item className="bread-home">Home</Breadcrumb.Item>
                
                <Breadcrumb.Item className="bread-type" active>
                  {`${newsDetail.type}`}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="detail-headline">
            <h1 className="headline-text"> {newsDetail.Headline}</h1>
          </div>
          <div className="breadcrumb-group">
            <Breadcrumb>
              <Breadcrumb.Item className="create" active>
                {`Create at ${newsDetail.DateTime}`}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="image-box">
            <img
              src={`/uploads/${newsDetail.imageUrl}`}
              className="news-image"
              alt="test"
            />
          </div>
          <div className="detail-description">
            <label className="text-desc">{newsDetail.description}</label>
          </div>

          <div className="comment-box">
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">
                Add New Comment
              </Form.Label>
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
                return <Message key={chat._id} name={chat.Name} time={chat.DateTime} message={chat.Message}
                />})}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default styled(Detail)`
  .breadAndIcon {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .bread-home a {
    text-decoration: none;
    color: gray;
  }
  .bread-type {
    color: black;
  }
  /* .create{
    font-size: 12px;
  } */
  .detail-headline {
    display: flex;
    margin-top: 15px;
  }
  .image-box {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .news-image {
    width: 75%;
    height: auto;
  }
  .text-desc {
    margin-top: 30px;
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
