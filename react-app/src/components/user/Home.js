import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";
import axios from "axios";
import { fetchCustomer } from "../../ActionAndStore/Customer/action";
import { fetchNews } from "../../ActionAndStore/News/action";
import { useSelector, useDispatch } from "react-redux";
import GetNews from "./GetNews";
import Search from "./Search";
import { Redirect } from "react-router-dom";
function Home({ className }) {
  const news = useSelector((state) => state.news);
  const user = useSelector((state) => state.customer);
  const [data] = React.useState(JSON.parse(localStorage.getItem("name")));

  const dispatch = useDispatch();
  useEffect(() => {
    const getNews = () => {
      dispatch(fetchCustomer(user));
    };
    getNews();
  }, [dispatch, user]);
  useEffect(() => {
    const getNews = () => {
      axios
        .get("http://localhost:5000/feed/GetFeed")
        .then((res) => {
          dispatch(fetchNews(res.data));
        })
        .catch(() => {
          console.log("error");
        });
    };
    getNews();
  }, [dispatch]);

  if (!data) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <div className={className}>
      <Container>
        <Search />
        <div className="news">
            <Row className="reverse-news">
              {news.map((data) => {
                return <GetNews key={data._id} data={data} />;
              }).reverse()}
            </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default styled(Home)`
  .title > h1 {
    margin-top: 50px;
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 0;
  }
  .input-search {
    display: flex;
    width: 100%;
    margin: 15px;
  }
  .search-tag {
    display: flex;
  }

  .category {
    margin-top: 5px;
    width: 300px;
    margin-left: 300px;
  }
  .form {
    border-radius: 20px;
  }
  .btn-search {
    right: 0;
    /* margin-right: 10%; */
  }
  .reverse-news {
    
  }
  .news {
    margin-top: 5px;
    display: flex;
  }
  .body > h1 {
    font-size: 20px;
  }
  .body > h2 {
    font-size: 18px;
  }
`;
