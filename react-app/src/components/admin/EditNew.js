import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import NavAdmin from "../navbar/NavAdmin";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import Swa from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser} from "../../ActionAndStore/user/action";

function EditNew({ className }) {
  const [newsDetail, setNews] = useState("");
  const { id } = useParams();
  const user = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  

  useEffect(() => {
    
      axios
        .get(`/feed/GetFeedById/${id}`)
        .then((res) => {
          setNews(res.data);
          setHeadline(res.data.Headline);
          setContent(res.data.content);
          setImage(res.data.imageUrl);
          setDescription(res.data.description);
          setDate(res.data.DateTime);
          setType(res.data.type);

        })
        .catch(() => {
          console.log("error");
        });
    
  }, [id]);
  

  const date = new Date().toLocaleString();
  const [Headline, setHeadline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const [dates, setDate] = React.useState(date);
  const [type, setType] = React.useState("");
  const history = useHistory();
  
  const editNews = (event) => {
    event.preventDefault();
    setDate(date);
    const formData = new FormData();
    formData.append("Headline", Headline);
    formData.append("Content", content);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("DateTime", dates);
    formData.append("type", type);
    let success = axios.put(`http://localhost:5000/feed/UpdateFeed/${id}`, formData)
    if(success){
      dispatch(fetchUser(user));
      history.push("/admin-home");
    }
  };

  function alertSuccess() {
    Swa.fire({
      title: "success",
      text: "success",
      confirmButtonColor: "#005488",
    });
  }
  return (
    <div className={className}>
      <NavAdmin />
      <div className="container">
        <div className="editnews-headline">
          <h1 className="headine-text">EDIT NEWS</h1>
        </div>
        <div className="editnews-form">
          <Form
            className="form-body"
            onSubmit={editNews}
            enctype="multipart/form-data"
          >
            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Choose Image</Form.Label>
              <div className="btn-selectfile">
              <Form.Control
                type="file"
                className="input-box"
                onChange={(event) => setImage(event.target.files[0])}
              />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Headline</Form.Label>
              <Form.Control
                type="text"
                className="input-box"
                placeholder="Enter your Headline"
                value={Headline}
                onChange={(event) => setHeadline(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="input-box"
                placeholder="Enter your Content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">News Type</Form.Label>
              <Form.Select
                className="input-box"
                onChange={(event) => setType(event.target.value)}
              >
                <option className="text-input">Select your News Type</option>
                <option value="1" className="text-input">
                  General News & Current Affairs
                </option>
                <option value="2" className="text-input">
                  Business, Finance & Economics
                </option>
                <option value="3" className="text-input">
                  Health & Medicine
                </option>
                <option value="4" className="text-input">
                  Entertainment, Art & Culture
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="title-formlabel">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="input-box"
                placeholder="Enter your Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <div className="btn-edit">
              <Button type="submit" className="text-edit">
                EDIT NEWS
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default styled(EditNew)`
  .editnews-headline {
    display: flex;
    margin-top: 30px;
  }
  .headine-text {
    color: #eb1c01;
  }
  .title-formlabel {
    color: #eb1c01;
  }
  .text-selectfile {
    background-color: gray;
    border: none;
  }
  .input-box {
    background-color: #f4f0f0;
    border: none;
  }
  .text-input {
    color: gray;
  }
  .btn-edit {
    display: flex;
    margin-top: 50px;
    justify-content: right;
  }
  .text-edit {
    background: -webkit-linear-gradient(left, #eb1c01, #ff7f01);
    border: none;
  }
`;
