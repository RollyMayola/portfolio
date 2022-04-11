import React, { useState } from "react";
import Modal from "react-modal";

import ModalOneBlogContent from "./modal/ModalOneBlogContent";
import ModalTwoBlogContent from "./modal/ModalTwoBlogContent";
import ModalThreeBlogContent from "./modal/ModalThreeBlogContent";
import ModalFourBlogContent from "./modal/ModalFourBlogContent";
import ModalFiveBlogContent from "./modal/ModalFiveBlogContent";
import ModalSixBlogContent from "./modal/ModalSixBlogContent";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      {/* Blog 1 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/eMarketing.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Comment posséder votre audience en créant une liste de diffusiont par courriel.</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              De nos jours, l'email marketing fait partie intégrante de toute stratégie marketing. 
              En fait, 59 % des spécialistes du marketing déclarent que l'e-mail est leur principale source de retour sur investissement.
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 1 Ends */}

      {/*  Blog 2 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/brand-1.png"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>L'IMAGE DE MARQUE</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Pourquoi l'image de marque est-elle si importante ?

              À l'ère des médias sociaux, les gens veulent avoir l'impression qu'ils peuvent se connecter, s'identifier et faire confiance à la personne à qui ils achètent leurs produits et services.
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalTwoBlogContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalTwoBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoBlogContent */}
      </div>
      {/*  Blog 2 Ends */}

      {/*  Blog 3 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/targ-1.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Ciblage</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Imaginez passer du temps et de l'argent avec une conception parfaite du produit, 
              avec une agence de médias sociaux, avec des fournisseurs, un emballage, une distribution, etc... 
              Et imaginez maintenant essayer de vendre votre produit/service et que personne ne veut. Tout le temps 
              et l'argent perdus. Plus dangereux de n'avoir qu'une idée, c'est de ne pas la tester. Et maintenant la
              évélation : si vous interrogez votre client (potentiel) avant de construire le produit, 
              vous économiserez beaucoup, beaucoup d'argent. Alors, comment faire ? Ce sont les directives inspirées 
              de Running Lean d'Ash Maurya, avec quelques exemples et deux outils gratuits pour construire 
              votre entretien de manière professionnelle.
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalThreeBlogContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalThreeBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeBlogContent */}
      </div>
      {/* Blog 3 Ends */}

    </>
  );
};

export default Blog;
