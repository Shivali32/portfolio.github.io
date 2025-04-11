import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
//   const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer className="mt-auto py-5 text-center bg-dark text-light">
      <Container>
        {props.children}
      </Container>
    </footer>
  );
};

export default Footer;
