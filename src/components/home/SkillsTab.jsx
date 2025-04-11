import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      )
      )}
    </>
  );
}


function SkillsTab({ skills, isScrolled }) {
    const skillsPerColumn = 4; // 16 skills / 4 columns
    const columns = Array.from({ length: 4 }, (_, index) =>
      skills.slice(index * skillsPerColumn, (index + 1) * skillsPerColumn)
    );
  
    return (
      <>
        {columns.map((columnSkills, index) => (
          <Col xs={12} md={6} lg={3} key={index}>
            <SkillsSection skills={columnSkills} isScrolled={isScrolled} />
          </Col>
        ))}
      </>
    );
  }
  
  export default SkillsTab;


  
// function SkillsTab({ skills, isScrolled }) {
//   return (
//     <>
//       <Col xs={12} md={6} lg={4}>
//         <SkillsSection
//           skills={skills.slice(0, Math.floor(skills.length / 4))}
//           isScrolled={isScrolled}
//         />
//       </Col>
//       <Col xs={12} md={6} lg={4}>
//         <SkillsSection
//           skills={skills.slice(Math.floor(skills.length / 4), skills.length)}
//           isScrolled={isScrolled}
//         />
//       </Col>
//     </>
//   );
// }

// export default SkillsTab;