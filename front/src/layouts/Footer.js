//React
import React from "react";
import { NavLink } from "react-router-dom";

//Styles & AOS animation
import {
  Paragraphs,
  ContainDivDefault,
  FooterBox,
} from "../styles/Index.styles";

export const Footer = () => (
  <FooterBox>
    <ContainDivDefault>
      <div className="button-box">
        <NavLink to="/terminos-y-condiciones">Terminos y condiciones</NavLink>
        <NavLink to="/politica-de-privacidad">Política de privacidad</NavLink>
      </div>
      <Paragraphs>
        @2020 by{" "}
        <a href="https://www.linkedin.com/in/rubenvaquero/">Rubén Vaquero</a>
      </Paragraphs>
    </ContainDivDefault>
  </FooterBox>
);
