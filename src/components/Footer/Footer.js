import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row"


function Footer (){

    return(
        <footer>
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Callum White
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Powered by React
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

//add links and icons to linkedIn and Github

export default Footer;