import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
// import Row from "react-bootstrap/Row";
import { Row, Col, Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

// Define your static projects array here
const projects = [
  {
    title: "Sign Language Recognition Using Hand Gestures",
    projectUrl: "https://myproject.com",
    technologies: ["Python", "Javascript", "OpenCV", "TensorFlow", "NumPy", "Google MediaPipe", "Flask"],
    lastUpdated: "2025-03-30T10:00:00Z",
    rating: 4.5,
    description: [
        ["Developed an application dedicated to assisting individuals with disabilities by enabling the identification and interpretation of 26 American Sign Language Hand Signs."],
        ["Created a platform utilizing the OpenCV library for capturing video streams and implementing a real-time hand sign recognition model with planning and coordinating a user-friendly solution by developing the application as a platform-independent web app using the Flask Framework."],
        ["Successfully trained a Convolutional Neural Network model with 87% accuracy and integrated it into the application."],

    ],
  },
  {
    title: "Revision Assistant Bot",
    projectUrl: "https://anotherproject.com",
    technologies: ["Python", "Scikit-learn","Natural Language Toolkit", "Kivy" ,"HTML/CSS"], 
    lastUpdated: "2025-03-25T14:00:00Z",
    rating: 4.0,
    description: [
        "Programmed a multifunctional learning assist chatbot with a primary focus on recording and uploading notes, enhanced by a natural language programming-based search functionality with up to 82% accuracy.",
        "Incorporated voice interaction features: speed adjustment, toggling between the two male and female voices, and smart voice recognition.",
        "Created the project using the Python Kivy framework, enabling the development of applications compatible with two platforms, namely Desktop and Android.",
        ],
  },
  {
    title: "Merit Analyzer",
    projectUrl: "https://anotherproject.com",
    technologies: ["Django", "React", "AWS EC2", "Plotly.js", "HTML/CSS"], 
    lastUpdated: "2025-03-25T14:00:00Z",
    rating: 4.0,
    description: [
        "Built and deployed a full-stack web application using Django and React, enabling interactive data analysis and visualization for students and teachers.",
        "Integrated Plotly.js to display individual student progress and overall class performance, with downloadable progress report certificates for each student.",
        "Deployed on AWS EC2 to ensure scalable, real-time access and smooth performance during high-traffic use.",
        "Streamlined academic monitoring by transforming raw data into actionable insights for educators and learners.",
    ],
  },
  // Add more projects as needed
//   Merit Analyzer
// April 2022 - March 2022
// Prototyped and executed a Django and React web application on AWS EC2 in a time-sensitive hackathon, enabling efficient data analysis and visualization with plotly.js and achieving first prize in the competition.

// React
// Django
// AWS EC2
// plotly.js
// Material-UI
// Tailwind


];

    const publication = {
    title: "Sign Language Recognition using Hand Gestures",
    journal: "International Journal of Scientific Research in Computer Science, Engineering and Information Technology (IJSRCSEIT)",
    //   description: null,
    url: "https://ijsrcseit.com/CSEIT228234",
    dated: "March-April 2022",
    };

const dummyProject = {
  title: null,
  description: null,
  projectUrl: null,
  technologies: null,
  lastUpdated: null,
  rating: null,
};

const Project = ({ heading, length }) => {
  // Create dummy array for loading state if needed
  const dummyProjectsArr = new Array(length).fill(dummyProject);

  // Use the static projects array directly
  const projectsArray = projects.slice(0, length); // Limit to 'length' if provided

  return (
    <Jumbotron fluid id="projects" className="text-light m-0" style={{ backgroundColor: "#301B3F" }}>            
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  project={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  project={project}
                />
              ))}
        </Row>
      </Container>
      <div className="container mt-5">
          <h2 className="display-4 pb-5 text-center text-white">
            Publication
          </h2>
            <Row className="d-flex justify-content-center align-items-stretch">                
                <Col md="7" className="mb-4 d-flex">
                    <Card
                    className="card shadow-lg p-3 rounded project-card flex-grow-1"
                    style={{ backgroundColor: "#00000055" }}
                    >
                    <Card.Body className="d-flex flex-column h-100">                        
                        <Card.Title 
                        as="h5"
                        className="mb-4 d-flex justify-content-between align-items-center"
                        >
                        <span><a className="text-decoration-none text-light" href={publication.url} >{publication.title}</a></span>
                        <span className="text-info">{publication.dated}</span>
                        </Card.Title>

                        <div className="d-flex justify-content-between mb-3">
                        <Card.Text className="text-muted mb-0">{publication.journal}</Card.Text>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>                
            </Row>
        </div>

    </Jumbotron>
  );
};

export default Project;