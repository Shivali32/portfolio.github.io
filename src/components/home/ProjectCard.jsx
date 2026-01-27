// import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    projectUrl,
    technologies,
    // lastUpdated,
    // rating
  } = project;  

  const cardContent = (
    <Card.Body className="d-flex flex-column">
      <Card.Title as="h5" className="existing-class mb-4 flex-grow-1">{title || <Skeleton />} </Card.Title>

      {description && Array.isArray(description) && description.length > 0 && (
        <ul className="flex-grow-1 mb-2">
          {description.map((item, index) => (
            <li key={index}>{Array.isArray(item) ? item[0] : item}</li> 
          ))}
        </ul>
      )}

      <hr className="mt-auto"/>
      {technologies ? (
        <Technologies techList={technologies} projectUrl={projectUrl} />
      ) : (
        <Skeleton count={3} />
      )}
    </Card.Body>
  );

  return (
    <Col lg={6} md={12} className="d-flex">
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none w-100"
          style={{ color: 'inherit' }}
        >
          <Card 
            className="card shadow-lg p-3 mb-5 rounded project-card" 
            style={{ 
              backgroundColor: "#00000055",
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            }}
          >
            {cardContent}
          </Card>
        </a>
      ) : (
        <Card className="card shadow-lg p-3 mb-5 rounded project-card" style={{ backgroundColor: "#00000055" }}>
          {cardContent}
        </Card>
      )}
    </Col>
  );
};

// const CardButtons = ({ projectUrl }) => {
//   return (
//     <div className="d-grid gap-2 d-md-block">
//       <a
//         href={projectUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="btn btn-outline-secondary mx-2"
//       >
//         View Project
//       </a>
//     </div>
//   );
// };

const Technologies = ({ techList, projectUrl }) => {
  return (
    <div className="pb-3">
      Technologies:{" "}
      {techList && techList.length > 0 ? (
        techList.map((tech, index) => (
          <span key={index} className="badge bg-dark text-light mx-1">
            {tech}
          </span>
        ))
      ) : (
        "No technologies specified"
      )}
    </div>
  );
};

// const CardFooter = ({ rating, lastUpdated }) => {
//   const [timeDisplay, setTimeDisplay] = useState("");

//   const handleTimeDisplay = useCallback(() => {
//     if (!lastUpdated) return setTimeDisplay("Not specified");
    
//     const date = new Date(lastUpdated);
//     const now = new Date();
//     const diff = now.getTime() - date.getTime();
//     const hours = Math.trunc(diff / 1000 / 60 / 60);

//     if (hours < 24) {
//       if (hours < 1) return setTimeDisplay("just now");
//       let measurement = hours === 1 ? "hour" : "hours";
//       return setTimeDisplay(`${hours} ${measurement} ago`);
//     } else {
//       const options = { day: "numeric", month: "long", year: "numeric" };
//       const time = new Intl.DateTimeFormat("en-US", options).format(date);
//       return setTimeDisplay(`on ${time}`);
//     }
//   }, [lastUpdated]);

//   useEffect(() => {
//     handleTimeDisplay();
//   }, [handleTimeDisplay]);

//   return (
//     <p className="card-text">
//       {rating && (
//         <span className="text-light card-link mr-4">
//           Rating: <span className="badge badge-dark">{rating}/5</span>
//         </span>
//       )}
//       <small className="text-muted">Updated {timeDisplay}</small>
//     </p>
//   );
// };

export default ProjectCard;