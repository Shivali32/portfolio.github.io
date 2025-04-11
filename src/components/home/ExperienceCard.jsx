// import React from 'react';

// import {
//   Col,
// } from "react-bootstrap";

// const ExperienceCard = ({ data }) => {
//   return (
//     <Col lg="6">
//       <div className="pb-5 text-center">
//         {/* <img className=" bg-white mb-3" src={data.companylogo} alt="" width={imgSize} height={imgSize} /> */}
//         <div className="col-12 col-md-6 col-lg-4 justify-content-center">
//             <img
//                 className="bg-white mb-3 img-fluid"
//                 src={data.companylogo}
//                 alt="Company Logo"
//             />
//         </div>
//         <p className="lead">
//           {data.role}
//           <br />
//           {data.date}
//           <br />
//           {data.msg}
//         </p>

//       </div>
//     </Col>
//   );
// }

// export default ExperienceCard;


import React from "react";
// import { Col } from "react-bootstrap";
import "../../assets/css/style.css";


const ExperienceCard = ({ data }) => {
    // console.log("Experiences prop:", data);
  return (
    //   <Col lg="6">
      <div className="p-3 text-center experience-card">
        {/* <div className="d-flex justify-content-center mb-3">
          <img
            className="bg-white d-block d-md-none"
            src={data.companylogo}
            alt={`${data.company} Logo`}
            width="100" 
            height="auto"
          />
          <img
            className="bg-white d-none d-md-block d-lg-none"
            src={data.companylogo}
            alt={`${data.company} Logo`}
            width="150"
            height="auto"
          />
          <img
            className="bg-white d-none d-lg-block"
            src={data.companylogo}
            alt={`${data.company} Logo`}
            width="200"
            height="auto"
          />
        </div> */}
        <h3 className="mb-2">{data.company}</h3>
        <div className="d-flex justify-content-between mb-3">
          <p className="lead mb-0">{data.role}</p>
          <p className="text-info mb-0">{data.date}</p>
        </div>
        {data.msg && Array.isArray(data.msg) && data.msg.length > 0 && (
          <ul>
            {data.msg.map((item, index) => (
              <li key={index}>{Array.isArray(item) ? item[0] : item}</li>
            ))}
          </ul>
        )}
      </div>
    // </Col>    
  );
};

export default ExperienceCard;
