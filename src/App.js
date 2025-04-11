import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message1={about.message1}
          message2={about.message2}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
          education={education}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences} id="experiences" />
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          data={skills.data}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <BrowserRouter basename="/">
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Navigate to="/home/" replace />} />
        <Route path="/home/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message1={getInTouch.message1}
            message2={getInTouch.message2}
            email={getInTouch.email}
            linkedin={getInTouch.linkedin}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
