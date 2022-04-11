import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p95", skillPercent: "95", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "C#" },
  { skillClass: "p50", skillPercent: "95", skillName: "NODE.JS" },
  { skillClass: "p65", skillPercent: "85", skillName: "ASP.NET core" },
  { skillClass: "p45", skillPercent: "75", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
