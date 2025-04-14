import React from "react";
// import React, { useState } from "react";
// import { useScrollPosition } from "../hooks/useScrollPosition";
// import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, experiences, getInTouch } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import { useNavigate } from "react-router-dom";

export const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Wait a little for the DOM to update after routing
  };

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
//   const [isTop, setIsTop] = useState(true);
//   const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
//   const navbarDimensions = useResizeObserver(navbarMenuRef);
//   const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       if (!navbarDimensions) return;
//       currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
//         ? setIsTop(true)
//         : setIsTop(false);
//       setScrollPosition(currPos.y);
//     },
//     [navBottom]
//   );

//   React.useEffect(() => {
//     if (!navbarDimensions) return;
//     navBottom - scrollPosition >= ref.current.offsetTop
//       ? setIsTop(false)
//       : setIsTop(true);
//   }, [navBottom, navbarDimensions, ref, scrollPosition]);

    const navigate = useNavigate();
  return (
    <Navbar
      ref={navbarMenuRef}
      className="px-3 fixed-top navbar-dark bg-dark"        
    //   className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
    //     }`}
      expand="lg"
    >
      {/* <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}> */}
      <Navbar.Brand className="navbar-brand" href="#home">
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead"
              //   href={process.env.PUBLIC_URL + "/#aboutme"}
              onClick={() => {
                navigate("/home/");
                scrollToSection("aboutme");
              }}              
            >
              About
            </NavLink>
          )}
          {experiences.show && (
            <NavLink
              className="nav-item lead"
              //   href={process.env.PUBLIC_URL + "/#experiences"}
              onClick={() => {
                navigate("/home/");
                scrollToSection("experiences");
              }}
            >
              Experiences
            </NavLink>
          )}          
          {repos.show && (

            <NavLink
            //   href={process.env.PUBLIC_URL + "/#projects"}
            onClick={() => {
                navigate("/home/");
                scrollToSection("projects");
              }}
            >
              Projects
            </NavLink>
          )}
          {/* <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink> */}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              //   href={process.env.PUBLIC_URL + "/#skills"}
              onClick={() => {
                navigate("/home/");
                scrollToSection("skills");
              }}
            >
              Skills
            </NavLink>
          )}
          {getInTouch.show && (
            <NavLink
              className="nav-item lead"
              //   href={process.env.PUBLIC_URL + "/#contactme"}
              href="#contactme"  onClick={() => {
                navigate("/home/");
                scrollToSection("contactme");
              }}
            >
              Contact Me
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
