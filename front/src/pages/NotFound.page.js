//React
import React, { useEffect } from "react";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  BoxImg,
  H1,
  ParagraphTop,
  Paragraphs,
  Col2HeaderPrivacy,
  TermsBox,
} from "../styles/Index.styles";

//Images
import privacyImg from "../../public/images/privacy-img.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const NotFoundPage = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox bgColor="blueLight" justify="evenly" className="z1">
        <Col2HeaderPrivacy className="contain" data-aos="fade-up">
          <ContentText>
            <H1>Página 404</H1>
          </ContentText>
          <BoxImg>
            <img src={privacyImg} alt="heeelp!" title="heeelp!" />
          </BoxImg>
        </Col2HeaderPrivacy>
      </SectionBox>

      <SectionBox bgColor="grey" column>
        <TermsBox className="contain">
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>Lorem ipsum dolor </span>
            </ParagraphTop>
            <Paragraphs blue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              enim ut nibh semper venenatis vitae posuere justo. Aliquam vitae
              feugiat nunc, id convallis magna. Mauris vitae metus hendrerit sit
              amet felis porta vestibulum.
            </Paragraphs>
            <Paragraphs blue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              enim ut nibh semper venenatis vitae posuere justo. Aliquam vitae
              feugiat nunc, id convallis magna. Mauris vitae metus hendrerit sit
              amet felis porta vestibulum.
            </Paragraphs>
            <Paragraphs blue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              enim ut nibh semper venenatis vitae posuere justo. Aliquam vitae
              feugiat nunc, id convallis magna. Mauris vitae metus hendrerit sit
              amet felis porta vestibulum.
            </Paragraphs>
          </div>
        </TermsBox>
      </SectionBox>
    </>
  );
};
