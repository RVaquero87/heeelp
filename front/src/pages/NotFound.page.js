//React
import React, { useEffect } from "react";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  BoxImg,
  H1,
  Page404,
  ParagraphTop,
  Paragraphs,
  Col2HeaderPrivacy,
  TermsBox,
} from "../styles/Index.styles";

//Images
import img404 from "../../public/images/img-404.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/";

export const NotFoundPage = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox bgColor="blueLight" justify="center" column>
        <Page404 className="contain">
          <BoxImg data-aos="fade-up">
            <img src={img404} alt="heeelp!" title="heeelp!" />
          </BoxImg>
          <ContentText data-aos="fade-up">
            <H1>Página no encontrada</H1>
            <Paragraphs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum, erat convallis vulputate cursus, lacus dui maximus sem,
              eget fringilla arcu tortor sit amet lectus.
            </Paragraphs>
            <div className="button-box">
              <ButtonLink
                className="button transparent big"
                whereTo="/contacto"
              >
                <span className="item-desktop">contacta con nosotros </span>
                <span className="item-resp">contactanos</span>
              </ButtonLink>
              <ButtonLink className="button big" whereTo="/">
                ir a inicio
              </ButtonLink>
            </div>
          </ContentText>
        </Page404>
      </SectionBox>
    </>
  );
};
