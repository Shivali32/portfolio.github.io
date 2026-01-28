import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences, 
  education
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = React.forwardRef((props, ref) => {
    const location = useLocation();

    useEffect(() => {
      const hash = location.hash; // like "#/home/#aboutme"
      const match = hash.match(/#([^#]+)$/); // captures the final part like "aboutme"
      if (match && match[1]) {
        const el = document.getElementById(match[1]);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100); // wait for render
        }
      }
    }, [location]);

  return (
    <>
    <section id="home">
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        imageLink={about.imageLink}
        message1={about.message1}
        ref={ref}
      />
      </section>

      {
        experiences.show && (
            <section id="experiences">
          <Experience experiences={experiences} id="experiences" />
          </section>
        )
      }
      {repos.show && (
        <section id="projects">
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
        </section>
      )}
      {skills.show && (
        <section id="skills">
        <Skills
          heading={skills.heading}
          data={skills.data}
        />
        </section>
      )}
      {about.show && (
        <section id="aboutme">
        <AboutMe
          heading={about.heading}
          message1={about.message1}
          message2={about.message2}
          link={null}
          imgSize={about.imageSize}
          resume={about.resume}
          education={education}
        />
        </section>
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HashRouter>
    {/* <BrowserRouter basename="/"> */}
    {/* <BrowserRouter basename={process.env.PUBLIC_URL + "/"}> */}
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Navigate to="/home/" replace />} />
        <Route path="/home/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <section id="contactme">
            <GetInTouch
              heading={getInTouch.heading}
              message1={getInTouch.message1}
              message2={getInTouch.message2}
              email={getInTouch.email}
              linkedin={getInTouch.linkedin}
            />
          </section>
        )}
      </Footer>
    {/* </BrowserRouter> */}
    </HashRouter>
  );
};

export default App;
