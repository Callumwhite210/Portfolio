import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Footer (){

    return(
        <footer className="footer">
            <Container fluid={true}>
                <Row className="justify-content-between p-3 text-light">
                    <Col className="p-0" md={3} sm={6}>
                        Callum White
                    </Col>
                    <Col md ={1} sm={6}>
                        <div>
                            <a href="https://github.com/Callumwhite210" target="_blank">
                                <FaGithub className="icon" size="60px"/>
                            </a>
                            <a href="https://www.linkedin.com/in/callum-white-2378631b1/" target="_blank">
                                <FaLinkedin className="icon" size="60px"/>
                            </a>
                        </div>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end text-light" md={3}>
                        Copywrite
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

//add links and icons to linkedIn and Github

export default Footer;