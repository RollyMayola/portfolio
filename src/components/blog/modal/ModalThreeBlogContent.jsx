import React from "react";

const ModalThreeBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          <span>Détails</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Rolly
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 10 Avril 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> wordpress, business, economy, marketing        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Les moyens bien connus de segmenter votre audience incluent :</h1>
      <img src="img/blog/target.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Il existe plusieurs façons de collecter des données pour aider à former des profils psychographiques pour vos clients typiques.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          Les besoins de chaque segment étant les mêmes, les messages marketing doivent être conçus pour chaque 
          segment afin de mettre l'accent sur les avantages et les fonctionnalités pertinents requis plutôt que 
          sur une taille unique pour tous les types de clients. Cette approche est plus efficace, offrant la bonne 
          combinaison au même groupe de personnes, plutôt qu'une approche dispersée.

          </p>
        </div>
        <p>
        Entrevues : Parlez à quelques personnes qui sont largement représentatives de votre public cible. 
          Des entretiens approfondis vous permettent de recueillir des données qualitatives utiles pour vraiment 
          comprendre ce qui motive vos clients. Le problème est qu'elles peuvent être coûteuses et difficiles à mener, 
          et la petite taille de l'échantillon signifie qu'elles ne sont pas toujours représentatives des personnes que 
          vous essayez de cibler.
        </p>
        <p>
          
         Sondages : les sondages vous permettent d'atteindre plus de personnes que les entretiens, mais il peut être plus difficile
         d'obtenir des réponses aussi pertinentes.
        </p>
        <p>
        Données client : vous pouvez disposer de données sur ce que vos clients ont tendance à acheter chez vous, 
        telles que des données provenant de cartes de fidélité si une marque FMCG ou de l'historique des achats en ligne si vous 
        êtes une entreprise de commerce électronique. Vous pouvez utiliser ces données pour générer des informations sur le type de 
        produits qui intéressent vos clients et sur ce qui est susceptible de les inciter à acheter. Par exemple, les remises
        augmentent-elles considérablement leur propension à acheter ? Dans ce cas, ils pourraient être assez spontanés.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
