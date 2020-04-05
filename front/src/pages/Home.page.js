//React
import React, { useContext } from "react";

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
  SectionServicesRates
} from "../../public/styles/Common.styles";

//Images
import people from "../../public/images/people.svg";
import helper from "../../public/images/helper.svg";
import helped from "../../public/images/helped.svg";
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { ItemServicies } from "../components/ItemServices/Index";

export const HomePage = () => {
  return (
    <>
      <SectionBox bgColor="blueLight" justify="between">
        <Col2Header className="contain">
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
        <ContainDivDefault className="contain">
          <H2 bgColor="blue-light">
            Así funciona <span>h</span>eee<span>lp!</span>
          </H2>
          <Col2Min inverse justify="start">
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
          <Col2Min latest justify="end">
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
          <ButtonLink whereTo="/registro" className="button big">
            Comienza a Usarlo
          </ButtonLink>
        </ContainDivDefault>
      </SectionBox>

      <SectionBox bgColor="blueMaxLight" justify="center" column>
        <SectionServicesRates className="contain">
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
            <ItemServicies ImgSrc={icon3} ItemText="Farmacia" />
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
    </>
  );
};
