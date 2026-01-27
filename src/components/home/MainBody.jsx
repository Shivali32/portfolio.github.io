// import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
// import bgImage from "../../assets/img/main_back.png"; // Import your image
import bgImage from "../../assets/img/back2.jpg"; // Import your image

import React, { useState, useEffect } from 'react';

const Typist = ({ text = [], speed = 100, deleteSpeed = 50, pauseDuration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const fullText = text[index % text.length];

    if (!isDeleting && displayedText === fullText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      // Move to next word and start typing
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % text.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, text, speed, deleteSpeed, pauseDuration]);

  return <span>{displayedText}</span>;
};

// export default Typist;




const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, imageLink, message1 }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        // style={{
        // //   background: `linear-gradient(136deg,${gradient})`,
        //   backgroundSize: "1200% 1200%",
        // }}
        
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >

<div
       
       style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `url(${bgImage}) no-repeat center fixed`,
        backgroundSize: "cover",
        opacity: 0.8, // Adjust transparency (0.3 = 30% visible)
        zIndex: -1, // Keep it behind the content
      }}
      ></div>

        {/* <div id="stars"></div> */}
        <Container>
          <Row className="align-items-center">
            {/* Image on the left */}
            {imageLink && (
              <Col md={5} className="text-center mb-4 mb-md-0">
                <img
                  src={imageLink}
                  alt="profile"
                  className="border border-secondary rounded-circle"
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                    maxWidth: "100%"
                  }}
                />
              </Col>
            )}
            
            {/* Name, message, and message1 on the right */}
            <Col md={imageLink ? 7 : 12} className={imageLink ? "text-left" : "text-center"}>
              <h1 ref={ref} className="display-1">
                {title}
              </h1>
              <div className="lead typist">
                <Typist text={message} speed={100} deleteSpeed={50} pauseDuration={1000}>
                  {/* {message} */}
                </Typist>
              </div>
              {message1 && (
                <p className="msg   lead mt-3" >
                {/* <p className="lead mt-3" style={{ textAlign: "center" }}> */}
                  {message1}
                </p>
              )}
              <div className="p-5">
                {icons.map((icon, index) => {
                  // Use 'fas' for solid icons like envelope, 'fab' for brand icons
                  const iconClass = icon.image === 'fa-envelope' ? 'fas' : 'fab';
                  return (
                    <a
                      key={`social-icon-${index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={icon.url}
                      aria-label={`My ${icon.image.split("-")[1]}`}
                    >
                      <i className={`${iconClass} ${icon.image}  fa-3x socialicons`} />
                    </a>
                  );
                })}
              </div>
              {/* <a
                className="btn btn-outline-light btn-lg "
                href={process.env.PUBLIC_URL + "/#/home/#aboutme"}
                role="button"
                aria-label="Learn more about me"
              >
                More about me
              </a> */}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;