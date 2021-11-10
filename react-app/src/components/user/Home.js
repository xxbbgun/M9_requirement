import React, { useEffect } from 'react'
import styled from "styled-components";
import { Carousel, Container, Row } from "react-bootstrap";
import Footer from '../footer/Footer';
import axios from "axios";
import { fetchNews } from "../../ActionAndStore/News/action";
import { useSelector, useDispatch } from "react-redux";
import GetNews from './GetNews';
// import Search from "./Search";

function Home({ className }) {
    const news = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        const getNews = () => {
          axios.get("/feed/GetFeed")
            .then((res) => {
              dispatch(fetchNews(res.data));
            })
            .catch(() => {
                console.log("error");
            });
        };
        getNews();
      }, [dispatch]);

    return (
        <div className={className}>
            <Container>
                {/* <Search/> */}
                <div className="slide">

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.kaohoon.com/wp-content/uploads/2019/05/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.kaohoon.com/wp-content/uploads/2019/05/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.kaohoon.com/wp-content/uploads/2019/05/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

                <div className="news">
                    <Row>
                        {news.map((data) => {
                            return <GetNews key={data.id} data={data} />
                        })}
                    </Row>
                </div>

            </Container>
            <Footer/>
        </div >
    )
}

export default styled(Home)`
/* .search{
    float: right;
} */
 .input-search {
    display: flex;
    width: 100%;
    margin: 50px
}
.form{
      border-radius: 20px;
}
.btn-search {
    right: 0;
    margin-right: 10%;
}
.news{
    margin-top: 50px;
    display: flex;
}
.body>h1{
    font-size: 20px;
}
.body>h2{
    font-size: 18px;
}
`;
