import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
function EditAndDeleteIcon({ className }) {
  const [newsDetail, setNews] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getNews = () => {
      axios
        .get(`/feed/GetFeedById/${id}`)
        .then((res) => {
          setNews(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    };
    getNews();
  }, [id]);
  return (
    <div className={className}>
      <div className="container">
        <div className="icon-group">
          <div className="edit-icon">
          <Link to={`/edit-news/${newsDetail._id}`}>
              <EditIcon className="edit" />
            </Link>
          </div>
          <div className="delete-icon">
            <DeleteForeverIcon className="delete" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(EditAndDeleteIcon)`
  .icon-group {
    display: flex;
    margin-top: 20px;
    justify-content: right;
  }
  .edit-icon {
    margin-right: 10px;
  }
  .edit {
    width: 38px;
    height: 40px;
    color: black;
  }
  .delete {
    width: 40px;
    height: 40px;
    color: red;
  }
`;
