//React
import React from "react";

//Styles & AOS animation
import {
  Paragraphs,
  ContainDivDefault,
  FooterBox
} from "../../public/styles/Common.styles";

//Images
//import people from "../../public/images/people.svg";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const Footer = () => (
  <FooterBox>
    <ContainDivDefault>
      <div className="button-box">
        <ButtonLink whereTo="/terminos-y-condiciones">
          Terminos y condiciones
        </ButtonLink>
        <ButtonLink whereTo="/politica-de-privacidad">
          Política de privacidad
        </ButtonLink>
      </div>
      <Paragraphs>
        @2020 by{" "}
        <a href="https://www.linkedin.com/in/rubenvaquero/">Rubén Vaquero</a>
      </Paragraphs>
    </ContainDivDefault>
  </FooterBox>
);
