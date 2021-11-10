import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from 'react-redux';
import {FormControl, Button as RBButton,Col,Row } from "react-bootstrap";
import Home from "./Home"
function Search({className}) {
    const news = useSelector((state) => state.news);
    const [search, setSearch] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);
    useEffect(() => {
        setFilterProduct(
            news.filter(productSearch => {
                return productSearch.headline.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, news])

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
                    return <Home key={value.id} item={value} />;
                })}
            </Row>
        </div>
    )
}

export default styled(Search)`
.search{
    float: right;
}
 .input-search {
    display: flex;
    width: 100%;
    margin: 50px
}
`;
