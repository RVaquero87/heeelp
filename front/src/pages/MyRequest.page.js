//React
import React, { useContext, useEffect } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {
  SectionBox,
  ContainDivDefault,
  SectionServicesProvided,
  ContentText,
  BoxImg,
  Col2Min,
  H1,
  H2,
  Col2HeaderHomeRol,
  ParagraphTop,
  Paragraphs,
  FaqsBox,
  SectionAidsRequest,
} from "../styles/Index.styles";

//Images
import youngGirl from "../../public/images/young-girl.svg";
import oldGirl from "../../public/images/old-girl.svg";
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";
import contact from "../../public/images/contact.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ItemServicies } from "../components/ItemServices/Index";
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";

export const MyRequestRolPage = () => {
  const {
    user,
    aidsRequestId,
    changeAidsRequest,
    setChangeAidsRequest,
  } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Function AidsRequestId Type Lenght
  const lenghtAidsRequestType = (typeAidRequest) => {
    const result = aidsRequestId.filter((item) => item.type == typeAidRequest)
      .length;
    return result;
  };

  return (
    <>
      <SectionBox bgColor="blueLight" justify="evenly" className="z1">
        <Col2HeaderHomeRol className="contain" data-aos="fade-up">
          <ContentText>
            <H1>¡Mis peticiones</H1>
          </ContentText>
          <BoxImg className={user?.rol === "Helpers" ? "helper" : "helped"}>
            <img
              src={user?.rol === "Helpers" ? youngGirl : oldGirl}
              alt="heeelp!"
              title="heeelp!"
            />
          </BoxImg>
        </Col2HeaderHomeRol>
      </SectionBox>

      <SectionBox justify="center" column bgColor="grey">
        <SectionServicesProvided className="contain" data-aos="fade-up">
          <H2 color="black">
            Total de servicios{" "}
            {user?.rol === "Helpers" ? "prestados" : "pedidos"}
          </H2>
          <ParagraphTop className="total-services">
            {aidsRequestId.length}
          </ParagraphTop>

          <div className="col5">
            <ItemServicies
              ImgSrc={icon1}
              ItemText="Lavandería"
              NumberServicesProvided={lenghtAidsRequestType("Lavandería")}
            />
            <ItemServicies
              ImgSrc={icon2}
              ItemText="Supermercado"
              NumberServicesProvided={lenghtAidsRequestType("Supermercado")}
            />
            <ItemServicies
              ImgSrc={icon3}
              ItemText="Parafarmacia"
              NumberServicesProvided={lenghtAidsRequestType("Parafarmacia")}
            />
            <ItemServicies
              ImgSrc={icon4}
              ItemText="Tareas domésticas"
              NumberServicesProvided={lenghtAidsRequestType(
                "Tareas domésticas"
              )}
            />
            <ItemServicies
              ImgSrc={icon5}
              ItemText="Animales domésticos"
              NumberServicesProvided={lenghtAidsRequestType(
                "Animales domésticos"
              )}
            />
          </div>
        </SectionServicesProvided>
      </SectionBox>

      <SectionBox justify="center" column>
        <SectionAidsRequest className="contain" data-aos="fade-up">
          <H2 color="black">
            <span>Peticiones en borrador </span>
          </H2>
        </SectionAidsRequest>
      </SectionBox>

      <SectionBox justify="center" column>
        <SectionAidsRequest className="contain" data-aos="fade-up">
          <H2 color="black">
            <span>Peticiones Publicadas </span>
          </H2>
        </SectionAidsRequest>
      </SectionBox>

      <SectionBox justify="center" column>
        <SectionAidsRequest className="contain" data-aos="fade-up">
          <H2 color="black">
            <span>Peticiones en curso </span>
          </H2>
        </SectionAidsRequest>
      </SectionBox>

      <SectionBox justify="center" column>
        <SectionAidsRequest className="contain" data-aos="fade-up">
          <H2 color="black">
            <span>Peticiones Realizas </span>
          </H2>
        </SectionAidsRequest>
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

export const MyRequestRolPagePrivate = withProtected(MyRequestRolPage, {
  redirect: false,
});
