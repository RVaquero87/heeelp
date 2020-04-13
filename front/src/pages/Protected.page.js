import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Styles & AOS animation
import { SectionProtectedBox, H1, Paragraphs } from "../styles/Index.styles";

//Images
import closeX from "../../public/images/close.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const ProtectedPage = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <SectionProtectedBox>
      <div className="box-inner">
        <H1 color="blue">
          <span>Página Protegida</span>
        </H1>
        <Paragraphs blue>
          Está página está protegida. Para poder acceder a ella, debe tener los
          requisitos adecuados. Si lo prefiere puede realizarnos una consulta
          con sus dudas o necesidades.
        </Paragraphs>
        <div className="button-box">
          <ButtonLink whereTo="/" className="button big">
            Home
          </ButtonLink>
          <ButtonLink
            whereTo="/contacto"
            className="button big transparent-blue"
          >
            Contactar
          </ButtonLink>
        </div>
        <Link to="/" className="button-close">
          <img src={closeX} alt="cerrar" title="cerrar" />
        </Link>
      </div>
    </SectionProtectedBox>
  );
};
