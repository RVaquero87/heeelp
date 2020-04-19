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
  FaqsBox,
} from "../styles/Index.styles";

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
import { ButtonLink } from "../components/ButtonLink/";
import { ItemServicies } from "../components/ItemServices/";
import { AccordionFaqsBox } from "../components/ItemAccordion/";

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
            <ItemServicies
              ImgSrc={icon1}
              ItemText="Lavandería"
              ItemContent="Etiam blandit neque sed orci ultricies auctor."
            />
            <ItemServicies
              ImgSrc={icon2}
              ItemText="Supermercado"
              ItemContent="Vivamus eu diam non sem finibus dictum."
            />
            <ItemServicies
              ImgSrc={icon3}
              ItemText="Parafarmacia"
              ItemContent="Aliquam semper ipsum et libero cursus blandit."
            />
            <ItemServicies
              ImgSrc={icon4}
              ItemText="Tareas domésticas"
              ItemContent="Nunc ultricies purus eu molestie volutpat."
            />
            <ItemServicies
              ImgSrc={icon5}
              ItemText="Animales domésticos"
              ItemContent="Nam eu odio et massa consectetur pulvinar."
            />
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
          <ButtonLink whereTo="/faqs" className="button white big">
            VER TODAS
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
