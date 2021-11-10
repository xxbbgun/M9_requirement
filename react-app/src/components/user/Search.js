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
 
    const [query, setQuery] = useState("");
    const news = useSelector((state) => state.news);
    const dispatch = useDispatch();
    function Set(event){
        setQuery(event.target.value);   
    }
    function useSearch(event) {
        axios.get(`/feed/Search/${query}`).then((res) => {
           dispatch(fetchNews(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    


    return (
        <div className={className}>
            <Col md={3} className="search">
                <div className="input-search">
                    <FormControl className="form" type="text" placeholder="Search here..." onChange={Set} value={query} />
                    <RBButton variant="none" className="btn-search" onClick={useSearch}><BiSearchAlt2/></RBButton>
                </div>
            </Col>
        </div>
    )
}

export default Search;
