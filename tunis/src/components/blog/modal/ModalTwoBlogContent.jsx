import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
         <span>Déails</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Rolly
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 Avril 2022        </span>
        <span>
          <i className="fa fa-tags"></i>  business, marketing, design
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Comment savoir quand une histoire de marque personnelle réussit ?</h1>
      <img src="img/blog/banding1.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Fidélité à la marque : c'est l'engagement manifesté envers une marque à
        par l'achat répétitif d'un certain produit, laissant le produit devenir supérieur à son concurrent.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>           
        Permettez-moi d'abord de commencer par dire ce qu'une marque n'est pas.
        Une marque n'est pas votre personnalité, un produit. Ce n'est pas non plus 
        votre logo ou les couleurs assorties de votre site Web et de la photo de couverture 
        de Facebook. Bien qu'il s'agisse d'éléments importants de votre marque, ils ne sont pas votre marque.
          </p>
        </div>
        <p>
        Une marque est les pensées et les sentiments qui sont évoqués chez quelqu'un lorsqu'il voit 
        votre logo ou lorsqu'il mentionne le nom d'une entreprise. C'est l'intuition d'une personne à propos 
        d'un produit, d'un service ou d'une organisation.
        </p>
        <p>
        Ce n'est pas ce que vous vendez, mais comment vous le vendez.
        Votre marque n'est pas ce que vous dites de votre entreprise mais plutôt ce que les gens en disent.

        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
