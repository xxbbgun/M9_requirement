import React from 'react'
import styled from "styled-components";
import { Col, FormControl, Button as RBButton, Carousel, Container, Card, Row } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import Footer from '../footer/Footer';
function Home({ className }) {
    // const [search, setSearch] = useState('');
    // const [filterProduct, setFilterProduct] = useState([]);
    // useEffect(() => {
    //     setFilterProduct(
    //         news.filter( productSearch => {
    //             return productSearch.name.toLowerCase().includes( search.toLowerCase() )
    //         })
    //     )
    //   }, [search, news])
    return (

        <div className={className}>
            <Container>
                <Col md={3} className="search">
                    <div className="input-search">
                        <FormControl className="form" type="text" placeholder="Search here..." />
                        <RBButton variant="none" className="btn-search"><BiSearchAlt2 /></RBButton>
                    </div>
                </Col>
                <div className="slice">

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
                        <Col lg={6}>
                            <div className="news-image">
                                <img src="https://www.kaohoon.com/wp-content/uploads/2019/05/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99.jpg"
                                    alt="news-img" style={{ width: '18rem' }} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card.Body className="body">
                                <h1>Title</h1>
                                <h2>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </h2>
                            </Card.Body>
                        </Col>

                    </Row>
                </div>

                <div className="news">
                    <Row>
                        <Col lg={6}>
                            <div className="news-image">
                                <img src="https://www.kaohoon.com/wp-content/uploads/2019/05/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99.jpg"
                                    alt="news-img" style={{ width: '18rem' }} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card.Body className="body">
                                <h1>Title</h1>
                                <h2>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </h2>
                            </Card.Body>
                        </Col>
                    </Row>
                </div>

                <div className="news">
                    <Row>
                        <Col lg={6}>
                            <div className="news-image">
                                <img src="https://www.kaohoon.com/wp-content/uploads/2019/05/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99.jpg"
                                    alt="news-img" style={{ width: '18rem' }} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card.Body className="body">
                                <h1>Title</h1>
                                <h2>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </h2>
                            </Card.Body>
                        </Col>

                    </Row>
                </div>

            </Container>
            <Footer/>
        </div >
    )
}

export default styled(Home)`
.search{
    float: right;
}
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
