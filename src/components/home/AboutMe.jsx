import { Jumbotron } from "./migration";
import React from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import "../../assets/css/style.css";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message1, message2, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  // Mock education data (replace with real data as needed)
  const educationData = [
    {
        title: "Master of Science in Computer Science",
        institution: "Indiana University Bloomington",
        duration: "2024 - Present",
        gpa: "3.77/4.0",
        subjects: ["Applied Algorithms, Applied Machine Learning, Computer Networks, Software Engineering, Data Visualization, Cloud Computing",],
    },
    {
        title: "Bachelor in Computer Engineering",
        institution: "Savitribai Phule Pune University",
        duration: "2018 - 2022",
        gpa: "3.75/4.0",
        subjects: ["Object Oriented Programming, Database Management Systems, Computer Networks, Theory of Computation, Data Structures & Algorithms, High Performance Computing, Software Engineering, Cloud Computing"],
      },
    ];

  return (
    <div id="aboutme">
      <Jumbotron className="m-0 text-light" style={{ backgroundColor: "#301b3f" }}>
        <div className="container row">
          <div
            className={`d-flex justify-content-center align-self-center col-lg-${
              showPic ? "5" : "12"
            }`}
          >
            {showPic && (
              <img
                className="border border-secondary rounded-circle d-block d-md-none"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize * 0.5}
                height={imgSize * 0.5}
              />
            )}
            {showPic && (
              <img
                className="border border-secondary rounded-circle d-none d-md-block d-lg-none"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize * 0.75}
                height={imgSize * 0.75}
              />
            )}
            {showPic && (
              <img
                className="border border-secondary rounded-circle d-none d-lg-block"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 my-3 text-center text-light">
              {heading}
            </h2>
            <div>
                <p className="msg lead text-light mb-0">{message1}</p>
                <br></br>
                {/* <p className="msg lead text-light mb-0">{message2}</p> */}
            </div>                            
            {resume && (
              <p className="lead text-center">  
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume} 
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Education Section */}
        <div className="container mt-5">
          <h2 className="display-4 pb-5 text-center text-white">
            Education
          </h2>
            <Row className="d-flex align-items-stretch">
                {educationData.map((edu, index) => (
                <Col md="6" key={index} className="mb-4 d-flex">
                    <Card
                    className="card shadow-lg p-3 rounded project-card flex-grow-1"
                    style={{ backgroundColor: "#00000055" }}
                    >
                    <Card.Body className="d-flex flex-column h-100">
                        {/* Title and GPA on the same line */}
                        <Card.Title
                        as="h5"
                        className="mb-4 d-flex justify-content-between align-items-center"
                        >
                        <span>{edu.title}</span>
                        <span className="text-muted">{edu.gpa}</span>
                        </Card.Title>

                        {/* Institution and Duration on the same line */}
                        <div className="d-flex justify-content-between mb-3">
                        <Card.Text className="mb-0">{edu.institution}</Card.Text>
                        <Card.Text className="text-info mb-0">{edu.duration}</Card.Text>
                        </div>

                        {/* Subjects as plain text, stretching to fill */}
                        {edu.subjects && Array.isArray(edu.subjects) && edu.subjects.length > 0 ? (
                        <Card.Text className="flex-grow-1 mb-0">
                            {edu.subjects.join(", ")}
                        </Card.Text>
                        ) : (
                        <Card.Text className="flex-grow-1 mb-0">No subjects listed</Card.Text>
                        )}
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
      </Jumbotron>
    </div>
  );
};

export default AboutMe;



// import React from "react";
// import { Row, Col, Card } from "react-bootstrap";
// import axios from "axios";
// import { Jumbotron } from "./migration";

// const pictureLinkRegex = new RegExp(
//   /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
// );

// const AboutMe = ({ heading, message, link, imgSize, resume, education }) => {
//   const [profilePicUrl, setProfilePicUrl] = React.useState("");
//   const [showPic, setShowPic] = React.useState(Boolean(link));
//   // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
//   React.useEffect(() => {
//     const handleRequest = async () => {
//       const instaLink = "https://www.instagram.com/";
//       const instaQuery = "/?__a=1";
//       try {
//         const response = await axios.get(instaLink + link + instaQuery);
//         setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
//       } catch (error) {
//         setShowPic(false);
//         console.error(error.message);
//       }
//     };

//     if (link && !pictureLinkRegex.test(link)) {
//       handleRequest();
//     } else {
//       setProfilePicUrl(link);
//     }
//   }, [link]);

//   const education = education.slice(0, length);

//   return (
//     <div id="aboutme">
//     <Jumbotron className="m-0 text-light" style={{ backgroundColor: "#301b3f" }}>
//       <div className="container row">
//         {/* <div className="col-5 d-none d-lg-block align-self-center">
//           {showPic && (
//             <img
//               className="border border-secondary rounded-circle"
//               src={profilePicUrl}
//               alt="profilepicture"
//               width={imgSize}
//               height={imgSize}
//             />
//           )}
//         </div> */}

//             {/* <div className="col-12 d-flex justify-content-center align-self-center"> */}
//             <div className={`d-flex justify-content-center align-self-center col-lg-${showPic ? "5" : "12" }`}>
//             {showPic && (
//                 <img
//                 className="border border-secondary rounded-circle d-block d-md-none"
//                 src={profilePicUrl}
//                 alt="profilepicture"
//                 width={imgSize * 0.5}
//                 height={imgSize * 0.5}
//                 />
//             )}
//             {showPic && (
//                 <img
//                 className="border border-secondary rounded-circle d-none d-md-block d-lg-none"
//                 src={profilePicUrl}
//                 alt="profilepicture"
//                 width={imgSize * 0.75}
//                 height={imgSize * 0.75}
//                 />
//             )}
//             {showPic && (
//                 <img
//                 className="border border-secondary rounded-circle d-none d-lg-block"
//                 src={profilePicUrl}
//                 alt="profilepicture"
//                 width={imgSize}
//                 height={imgSize}
//                 />
//             )}
//             </div>

//         <div className={`col-lg-${showPic ? "7" : "12"}`}>
//             <h2 className="display-4 my-3 text-center" style={{ color: "white" }}>{heading}</h2>
//             <p className="lead text-center" style={{ color: "white" }}>{message}</p>
//             {resume && (
//             <p className="lead text-center">
//               <a
//                 className="btn btn-outline-dark btn-lg"
//                 href={resume}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 role="button"
//                 aria-label="Resume/CV"
//               >
//                 Resume
//               </a>
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="container mt-5">
//           <h2 className="display-4 pb-5 text-center" style={{ color: "white" }}>
//             Education
//           </h2>
//           <Row className="d-flex align-items-stretch">
//             {education.map((edu, index) => (
//               <Col md="4" key={index} className="mb-4">
//                 <Card
//                   className="card shadow-lg p-3 rounded project-card"
//                   style={{ backgroundColor: "#00000055" }}
//                 >
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title as="h5" className="mb-4">
//                       {edu.title}
//                     </Card.Title>
//                     <Card.Text className="mb-2">{edu.institution}</Card.Text>
//                     <Card.Text className="text-muted mb-3">{edu.duration}</Card.Text>
//                     {edu.details && Array.isArray(edu.details) && edu.details.length > 0 && (
//                       <ul className="flex-grow-1 mb-0">
//                         {edu.details.map((item, idx) => (
//                           <li key={idx}>{item}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>
//     </Jumbotron>
//     </div>
//   );
// };

// export default AboutMe;
