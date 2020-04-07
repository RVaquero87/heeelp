//React
import React, { useEffect } from "react";

//Styles & AOS animation
import {
  SectionBox,
  ContainDivDefault,
  ContentText,
  BoxImg,
  H1,
  H2,
  Paragraphs,
  Col2Min,
  FaqsBox
} from "../../public/styles/Common.styles";

//Images
import contact from "../../public/images/contact.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBoxAll } from "../components/ItemAccordion/Index";

export const FaqsPage = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox bgColor="orange" column>
        <FaqsBox className="contain first-section" data-aos="fade-up">
          <H1>
            ¿Tienes dudas?{" "}
            <span className="item-block">
              Consulta nuestras preguntas frecuentes
            </span>
          </H1>
          <AccordionFaqsBoxAll />
        </FaqsBox>
      </SectionBox>

      <SectionBox column>
        <ContainDivDefault className="contain" data-aos="fade-up">
          <Col2Min inverse marginTopNone>
            <ContentText>
              <H2 color="blue">¿Quieres contactar con nosotros?</H2>
              <Paragraphs blue>
                Si tienes cualquier pregunta que hacernos, no dudes en
                enviarnoslas. Clicka en contacta, rellena el formulario y te
                responderemos lo antes posible.
              </Paragraphs>
              <ButtonLink whereTo="/contacto" className="button big">
                Contactar
              </ButtonLink>
            </ContentText>
            <BoxImg>
              <img src={contact} alt="Contacto" title="Contacto" />
            </BoxImg>
          </Col2Min>
        </ContainDivDefault>
      </SectionBox>
    </>
  );
};
