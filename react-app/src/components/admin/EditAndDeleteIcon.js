import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swa from "sweetalert2";
function EditAndDeleteIcon({ className }) {
  const [newsDetail, setNews] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getNews = () => {
      axios
        .get(`http://128.199.117.96:5000/feed/GetFeedById/${id}`)
        .then((res) => {
          setNews(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    };
    getNews();
  }, [id]);

  const history = useHistory();
  const DeleteNews = async () => {
    Swa.fire({
      title: "Do you want to delete the news?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        let data = axios.delete(`http://128.199.117.96:5000/feed/DeleteFeed/${id}`)
        if(data){
          history.push("/admin-home");
        }
      }
   
    });
    
  };

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
            <DeleteForeverIcon className="delete" onClick={DeleteNews}/>
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
