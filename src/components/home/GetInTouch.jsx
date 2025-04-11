import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/css/style.css";

const GetInTouch = ({ heading, message1, message2, email, linkedin }) => {
  return (
    <>

        <Row className="d-flex justify-content-center align-items-stretch">                
            <Col md="9" className="mb-4 d-flex">
            <section id="contactme" className="justify-content-center">
                <h2 className="display-4 pb-3 text-center">{heading}</h2>
                <p className="get-in-touch lead text-center pb-3">
                    {message1} <a className="text-decoration-none text-info" href={`mailto:${email}`}>{email} </a>
                    {message2} <a className="text-decoration-none text-info" href={linkedin}>LinkedIn</a>.
                </p>
            </section>  
            </Col>                
        </Row>
    </>
  );
};

export default GetInTouch;
