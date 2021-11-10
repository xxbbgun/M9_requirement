import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from 'react-redux';
import {FormControl, Button as RBButton,Col,Row } from "react-bootstrap";
import Home from "./Home"
import axios from "axios";
import { fetchNews } from "../../ActionAndStore/News/action";
import { useDispatch } from "react-redux";
import GetNews from "./GetNews";
function Search({className}) {
 
    const [search, setSearch] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);
    const news = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        const getNews = () => {
          axios.get(`/feed/Search/${search}`)
            .then((res) => {
              dispatch(fetchNews(res.data));
              console.log(res)
            })
            .catch(() => {
                console.log("error");
            });
        };
        getNews();
      }, [dispatch]);


    return (
        <div className={className}>
            <Col md={3} className="search">
                <div className="input-search">
                    <FormControl className="form" type="text" placeholder="Search here..." onChange={e => setSearch(e.target.value)} />
                    <RBButton variant="none" className="btn-search"><BiSearchAlt2 /></RBButton>
                </div>
            </Col>
            <Row className="card-container">
                {filterProduct.map((value) => {
                    return <GetNews key={value.id} item={value} />;
                })}
            </Row>
        </div>
    )
}

export default Search;
