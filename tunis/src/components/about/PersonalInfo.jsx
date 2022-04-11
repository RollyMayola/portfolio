import React from "react";

const personalInfoContent = [
  { meta: "Prénom", metaInfo: "Rolly" },
  { meta: "Nom", metaInfo: "Mayola" },
  { meta: "Freelance", metaInfo: "Disponible" },
  { meta: "Addresse", metaInfo: "Montréal, QC. Canada" },
  { meta: "Téléphone", metaInfo: "+14388281442" },
  { meta: "Courriel", metaInfo: "rolly.mayola@hotmail.com" },
  { meta: "LinkedIn", metaInfo: " @rollymayola" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
