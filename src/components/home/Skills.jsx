import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Row, Col, Card } from "react-bootstrap";

const certifications = [
    {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google",
    },
    {
        title: "Agile Software Development",
        issuer: "University of Minnesota",
    },

];

const skillsCategories = [
    {
        title: "Languages",
        skills: ["Python", "Java", "C/C++", "SQL", "PHP", "Golang", "JavaScript"]
    },
    {
        title: "AI/ML & Data",
        skills: ["TensorFlow", "Keras", "OpenCV", "Mediapipe", "Pandas", "NumPy", "PyTorch", "Scikit-learn (sklearn)"]
    },
    {
        title: "Web Development",
        skills: ["Django", "Flask", "ReactJS", "AngularJS", "CodeIgniter"]
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "Oracle", "DBeaver", "MongoDb"]
    },
    {
        title: "Tools",
        skills: ["Git/GitHub", "Jira", "Postman", "Tableau", "PowerBI", "QlikSense", "Kubernetes", "Docker"]
    }
];

const Skills = React.forwardRef(({ heading, data}, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="m-0" id="skills" style={{ backgroundColor: "#3c415c" }}>
      <Container className="px-5" >
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center text-light">
          {heading}
        </h2>
        <Row className="d-flex justify-content-center align-items-stretch">
          {skillsCategories.map((category, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4 d-flex">
              <Card
                className="card shadow-lg p-1 rounded project-card flex-grow-1"
                style={{ backgroundColor: "#00000055" }}
              >
                <Card.Body className="d-flex flex-column h-100">
                  <Card.Title
                    as="h5"
                    className="mb-2 ms-3 d-flex justify-content-between align-items-center"
                  >
                    <span className="text-light">{category.title}</span>
                  </Card.Title>
                  <div className="flex-grow-1">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="badge bg-dark text-light mx-1 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="container mt-5">
          <h2 className="display-4 pb-5 text-center text-white">
            Certifications
          </h2>
            <Row className="d-flex justify-content-center align-items-stretch">   
            {certifications.map((certifications, index) => (             
                <Col md="5" className="mb-4 d-flex">
                    <Card
                    className="card shadow-lg p-3 rounded project-card flex-grow-1"
                    style={{ backgroundColor: "#00000055" }}
                    >
                    <Card.Body className="d-flex flex-column h-100">                        
                        <Card.Title 
                        as="h5"
                        className="mb-2 d-flex justify-content-between align-items-center"
                        >
                        <span className="text-light">{certifications.title}</span>
                        </Card.Title>

                        <div className="d-flex justify-content-between mb-2">
                        <Card.Text className="text-info mb-0">{certifications.issuer}</Card.Text>
                        </div>
                    </Card.Body>
                    </Card>
                </Col> 
                ))}               
            </Row>
        </div>
    </Jumbotron>
  );
});

export default Skills;
