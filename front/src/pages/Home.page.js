//React
import React, { useContext, useEffect } from "react";

//Styles & AOS animation
import {
  SectionBox,
  ContainDivDefault,
  ContentText,
  BoxImg,
  H1,
  H2,
  ParagraphTop,
  Paragraphs,
  Col2Header,
  Col2Min,
  SectionServicesRates,
  SectionReviewsHome,
  FaqsBox,
} from "../styles/Index.styles";

//Images
import people from "../../public/images/people.svg";
import helper from "../../public/images/helper.svg";
import helped from "../../public/images/helped.svg";
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";
import contact from "../../public/images/contact.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { getAverage, scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { ItemServicies } from "../components/ItemServices/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";
import { ReviewsBoxItem } from "../components/ListItemReviews/Index";

export const HomePage = () => {
  const { listReviews } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox bgColor="blueLight" justify="between" className="z1">
        <Col2Header className="contain" data-aos="fade-up">
          <ContentText>
            <H1>Una nueva forma de ayudar</H1>
            <ParagraphTop>
              Descubre el servicio que pone en contacto a personas que{" "}
              <span>necesitan ayuda</span> en tareas del día a día con personas
              que <span>están dispuestas a ayudar</span>.
            </ParagraphTop>
            <ButtonLink whereTo="/registro" className="button big">
              Comienza a Usarlo
            </ButtonLink>
          </ContentText>
          <BoxImg>
            <img src={people} alt="heeelp!" title="heeelp!" />
          </BoxImg>
        </Col2Header>
      </SectionBox>

      <SectionBox column>
        <ContainDivDefault className="contain special-padding">
          <H2 color="blue-light" data-aos="fade-up">
            Así funciona <span className="item-light">h</span>eee
            <span className="item-light">lp!</span>!
          </H2>
          <Col2Min inverse justify="start" data-aos="fade-up">
            <ContentText>
              <ParagraphTop blue>
                <span>Si necesitas ayuda…</span>
              </ParagraphTop>
              <Paragraphs blue>
                Regístrate en nuestro servicio como usuario que necesita ayuda y
                elige que servicios necesitas que hagan por ti.
              </Paragraphs>
              <Paragraphs blue>
                Haz una o varias peticiones y lánzalas a nuestra comunidad para
                que algún “helper” la pueda seleccionar.
              </Paragraphs>
              <Paragraphs blue>
                Cuando alguien la seleccione te llegará una notificación para
                que la aceptes y a drisfrutar de heeelp!
              </Paragraphs>
            </ContentText>
            <BoxImg>
              <img src={helped} alt="helper" title="helper" />
            </BoxImg>
          </Col2Min>
          <Col2Min latest justify="end" data-aos="fade-up">
            <ContentText>
              <ParagraphTop blue>
                <span>Si estás dispuesto a ayudar…</span>
              </ParagraphTop>
              <Paragraphs blue>
                Regístrate en nuestro servicio como usuario que va a ayudar a
                los demás.
              </Paragraphs>
              <Paragraphs blue>
                Mira las peticiones, filtra y selecciona la que más se adapte a
                lo que quieras ofrecer.
              </Paragraphs>
              <Paragraphs blue>
                Cuando la persona que necesita esa ayuda te acepte como ayudante
                podrás ponerte en contacto y realizar la tarea.
              </Paragraphs>
            </ContentText>
            <BoxImg>
              <img src={helper} alt="helped" title="helped" />
            </BoxImg>
          </Col2Min>
          <ButtonLink
            whereTo="/registro"
            className="button big"
            data-aos="fade-up"
          >
            Comienza a Usarlo
          </ButtonLink>
        </ContainDivDefault>
      </SectionBox>

      <SectionBox bgColor="blueMaxLight" justify="center" column>
        <SectionServicesRates className="contain" data-aos="fade-up">
          <H2>Nuestros servicios y tarifas</H2>
          <Paragraphs>
            Estos son los posibles servicios en los que un <span>"helper"</span>{" "}
            puede ayudar. Los <span>"helped"</span> podrán marcar entre estas
            opciones cuando{" "}
            <span>creen sus distintas peticiones de ayuda.</span>
          </Paragraphs>

          <div className="col5">
            <ItemServicies ImgSrc={icon1} ItemText="Lavandería" />
            <ItemServicies ImgSrc={icon2} ItemText="Supermercado" />
            <ItemServicies ImgSrc={icon3} ItemText="Parafarmacia" />
            <ItemServicies ImgSrc={icon4} ItemText="Tareas domésticas" />
            <ItemServicies ImgSrc={icon5} ItemText="Animales domésticos" />
          </div>

          <Paragraphs>
            Los <span>"helped"</span>" podrán elegir entre que la tarea se
            realice <span>gratis</span> o si prefieren, pagar por el servicio{" "}
            <span>hasta 10 €/hora</span> cuando creen sus peticiones de ayuda,
          </Paragraphs>

          <ButtonLink whereTo="/servicios-tarifas" className="button big">
            Ver más info
          </ButtonLink>
        </SectionServicesRates>
      </SectionBox>

      <SectionBox column>
        <SectionReviewsHome className="contain" data-aos="fade-up">
          <div className="box-faqs">
            <div className="box-title">
              <H2 color="orange">
                La opinión de los usuarios de{" "}
                <span className="item-light">h</span>eee
                <span className="item-light">lp!</span>!
              </H2>
              <div className="average">
                <ParagraphTop blue>
                  <span>Nota media del servicio</span>
                </ParagraphTop>
                <ParagraphTop blue>
                  {listReviews &&
                    getAverage(listReviews.map((item) => item.stars))}
                  <span>/5</span>
                </ParagraphTop>
              </div>
            </div>
            <div className="box-reviews" data-aos="fade-up">
              {listReviews &&
                listReviews
                  .sort((a, b) => b.stars - a.stars)
                  .map((review, i) => {
                    if (i <= 1) {
                      return <ReviewsBoxItem review={review} key={i} />;
                    }
                  })}
            </div>
          </div>

          <ButtonLink whereTo="/reviews" className="button big">
            Ver más comentarios
          </ButtonLink>
        </SectionReviewsHome>
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
