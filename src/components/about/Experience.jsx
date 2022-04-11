import React from "react";

const experienceContent = [
  {
    year: " 2018-2020",
    position: " Marketing numérique",
    compnayName: "Rolly Myola Inc",
    details: ` Élaboration de campagnes publicitaires. Utilisation de différents systemes et stratégies digital comme Wordpress, Google Analytics et Google Ads afin d'attirer et garder les clients .
    `,
  },
  {
    year: "2013-2020",
    position: " Adjointe administrative  ",
    compnayName: "La Capitale assurance",
    details: `Recueillir et analyser des données statistiques pour rédiger des rapports et identifier les tendances afin de développer et améliorer les relations avec les clients.
    Fournir un soutien administratif à l’équipe de vente (Traduction de documents, saisie de données et gestion des chèques & factures, etc.).`,
  },
  {
    year: "2008-2012 ",
    position: "Spécialiste du service à la clientèle",
    compnayName: "La Financière Manuvie",
    details: `Fournir les renseignements exacts et proposer des solutions adéquates à la clientéle.
    Accompagner et supporter les clients lors de l’utilisation de nos outils électroniques et gestionnaires.
    Communiquer avec divers départements à l’interne.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
