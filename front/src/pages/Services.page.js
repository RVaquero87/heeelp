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
  SectionServicesRates,
  FaqsBox
} from "../../public/styles/Common.styles";

//Images
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";
import contact from "../../public/images/contact.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { ItemServicies } from "../components/ItemServices/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";

export const ServicesPage = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox bgColor="blueMaxLight" justify="center" column>
        <SectionServicesRates
          className="contain first-section"
          data-aos="fade-up"
        >
          <H1>Nuestros servicios y tarifas</H1>
          <Paragraphs>
            Estos son los posibles servicios en los que un <span>"helper"</span>{" "}
            puede ayudar. Los <span>"helped"</span> podrán marcar entre estas
            opciones cuando{" "}
            <span>creen sus distintas peticiones de ayuda.</span>
          </Paragraphs>

          <div className="col5">
            <ItemServicies ImgSrc={icon1} ItemText="Lavandería" />
            <ItemServicies ImgSrc={icon2} ItemText="Supermercado" />
            <ItemServicies ImgSrc={icon3} ItemText="Farmacia" />
            <ItemServicies ImgSrc={icon4} ItemText="Tareas domésticas" />
            <ItemServicies ImgSrc={icon5} ItemText="Animales domésticos" />
          </div>

          <Paragraphs>
            Los <span>"helped"</span>" podrán elegir entre que la tarea se
            realice <span>gratis</span> o si prefieren, pagar por el servicio{" "}
            <span>hasta 10 €/hora</span> cuando creen sus peticiones de ayuda,
          </Paragraphs>
        </SectionServicesRates>
      </SectionBox>

      <SectionBox bgColor="orange" column>
        <FaqsBox className="contain" data-aos="fade-up">
          <H2>
            ¿Tienes dudas?{" "}
            <span className="item-block">
              Consulta nuestras preguntas frecuentes
            </span>
          </H2>
          <AccordionFaqsBox />
          <ButtonLink whereTo="/faqs" className="button big">
            VER MÁS FAQ'S
          </ButtonLink>
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
