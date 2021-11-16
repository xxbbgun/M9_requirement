import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
// import { useSelector } from 'react-redux';
import { FormControl, Button as RBButton, Col, Form } from "react-bootstrap";
import axios from "axios";
import { fetchNews } from "../../ActionAndStore/News/action";
import { useDispatch } from "react-redux";

function Search({ className }) {

    const [query, setQuery] = useState("");
    const [type, setType] = useState("");
    // const news = useSelector((state) => state.news);
    const dispatch = useDispatch();
    function Set(event) {
        setQuery(event.target.value);
    }
    function useSearchOne(event) {
        axios.get(`http://128.199.117.96:5000/feed/Search/${query}`).then((res) => {
            dispatch(fetchNews(res.data));
        })
            .catch((err) => {
                console.log(err);
            });
    }

    function useSearch(event) {
        axios
            .get(`http://128.199.117.96:5000/feed/Category/${type}`)
            .then((res) => {
                dispatch(fetchNews(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }



    return (
        <div className={className}>
            <div className="title">
                    <h1>ALL NEWS</h1>
                </div>
            <div className="search-tag">
                
                   <Col md={6} className="search">
                    <div className="input-search">
                        <FormControl className="form" type="text" placeholder="Search here..." onChange={Set} value={query} />
                        <RBButton variant="none" className="btn-search" onClick={useSearchOne}><BiSearchAlt2 /></RBButton>
                    </div>
                </Col>
                <div className="category">
                    <Form.Group className="mb-2 mt-2">
                        <Form.Select
                            className="input-box"
                            onChange={(event) => setType(event.target.value)}
                            onClick={useSearch}
                        >
                            <option className="text-input">Category</option>
                            <option
                                value="General News & Current Affairs"
                                className="text-input"
                            >
                                General News & Current Affairs
                            </option>
                            <option
                                value="Business, Finance & Economics"
                                className="text-input"
                            >
                                Business, Finance & Economics
                            </option>
                            <option value="Health & Medicine" className="text-input">
                                Health & Medicine
                            </option>
                            <option
                                value="Entertainment, Art & Culture"
                                className="text-input"
                            >
                                Entertainment, Art & Culture
                            </option>
                        </Form.Select>
                    </Form.Group>
                </div>
             
            </div>
        </div>
    )
}

export default Search;
