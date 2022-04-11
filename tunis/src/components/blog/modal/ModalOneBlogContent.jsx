import React from "react";

const ModalOneBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>Details</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> steve
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 January 2017
        </span>
        <span>
          <i className="fa fa-tags"></i> wordpress, business, economy, design
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Qu'est-ce qu'une campagne de marketing par e-mail ?</h1>
      <img src="img/blog/marketing.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Une campagne de marketing par e-mail est une série d'e-mails qu'une entreprise 
        utilise pour communiquer avec ses clients actuels et potentiels. Ce contenu planifié 
        est distribué par e-mail dans le but d'atteindre un objectif spécifique pour l'organisation, 
        tel que nourrir les prospects ou encourager l'engagement.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
        selon Constant Contact, le retour sur investissement moyen du marketing par e-mail est de 42 $ 
        pour chaque dollar dépensé. Inutile de dire que le courrier électronique est un élément important 
        d'une stratégie marketing et que son succès dépend en grande partie de la qualité de la conception 
        de vos campagnes par courrier électronique.
        </p>

        </div>
        <p> 
            Voici quelques exemples d'objectifs différents que votre campagne d'e-mails peut viser :
            </p>
        <p>
        Génération de trafic - Le courrier électronique peut être un canal de promotion efficace pour 
        le contenu de grande valeur que vous créez sur votre site Web.
        <br/>
       <p>
       Sensibilisation - Tous ceux qui s'inscrivent à votre liste de diffusion ne sont pas prêts à prendre 
       une décision d'achat. Vous pouvez utiliser le marketing par e-mail pour rester en tête tout en fournissant
       le contenu éducatif le plus pertinent pour eux. 
       </p>
        </p>
        <p>
        Nourrir des prospects- Comme vous restez en tête, vous pouvez également envisager des moyens d'identifier
         les prospects que vous avez avec l'intention d'achat la plus élevée et de fournir un contenu axé sur 
         la conversion qui les "alimente" en vue d'une vente (ou du moins vers la préparation des ventes) .
         Génération de revenus - Vous pouvez créer des campagnes de marketing par e-mail pour vos clients existants
         afin de promouvoir les opportunités de vente incitative et de vente croisée. Vous pouvez également créer des
         campagnes pour capturer une conversion de vente à partir de prospects proches d'une décision d'achat. 
         (Un exemple pourrait être la création de campagnes "abandonner le panier" pour récupérer les conversions de ventes perdues.)
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
