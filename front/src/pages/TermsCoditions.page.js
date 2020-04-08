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
  TermsBox
} from "../../public/styles/Common.styles";

//Images
import people from "../../public/images/people.svg";
import contact from "../../public/images/contact.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const TermsConditionsPage = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox bgColor="blueLight" justify="between" data-aos="fade-up">
        <Col2Header className="contain first-section">
          <ContentText>
            <H1>Términos y Condiciones</H1>
            <ParagraphTop>
              En heeelp! urna sit amet justo lacinia auctor ut at nisl. Duis
              elementum elit sit amet felis porta vestibulum. Vestibulum lacinia
              sapien sit amet dolor laoreet, quis lobortis nulla posuere.
            </ParagraphTop>
          </ContentText>
        </Col2Header>
      </SectionBox>

      <SectionBox bgColor="grey" column>
        <TermsBox className="contain">
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>1. INFORMACIÓN GENERAL</span>
            </ParagraphTop>
            <Paragraphs blue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              enim ut nibh semper venenatis vitae posuere justo. Aliquam vitae
              feugiat nunc, id convallis magna. Mauris vitae metus hendrerit,
              ultricies nisi rhoncus, scelerisque arcu. Aenean iaculis maximus
              commodo. Morbi tempus ut erat sit amet ultricies. Pellentesque
              quis sem et massa consequat mollis. Pellentesque gravida blandit
              ex id vehicula. Praesent eget urna sit amet justo lacinia auctor
              ut at nisl. Duis elementum elit sit amet felis porta vestibulum.
            </Paragraphs>
            <Paragraphs blue>
              Vestibulum lacinia sapien sit amet dolor laoreet, quis lobortis
              nulla posuere. Vestibulum convallis magna vitae sem luctus
              fringilla et non orci. Suspendisse vitae vehicula sapien. Etiam at
              purus luctus massa blandit mattis a tristique dui. Aenean mattis
              ante a lacus dictum placerat. Aenean ac vestibulum diam. Cras
              vitae tincidunt neque. Suspendisse tortor tortor, blandit quis
              arcu malesuada, aliquet commodo ante. Proin ac diam massa. Aenean
              in sodales eros. Ut pulvinar molestie erat in egestas. Vestibulum
              interdum euismod risus, eu dictum felis hendrerit ut.
            </Paragraphs>
          </div>
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>
                2. CONDICIONES GENERALES DE USO DEL “SITIO WEB” Y DE LOS
                “CONTENIDOS”
              </span>
            </ParagraphTop>
            <Paragraphs blue>
              Proin venenatis porta ex at aliquet. Nulla quis consectetur urna.
              Nam tempor erat nunc, sit amet egestas felis fermentum nec. Duis
              sit amet dictum nulla, eu suscipit magna. Vivamus metus nisi,
              aliquet eu enim convallis, mattis viverra lacus. Nam accumsan
              facilisis orci eget ornare. Aliquam sit amet dapibus tortor.
              Aenean sed odio faucibus, luctus mi eu, eleifend sem. Vivamus
              turpis leo, condimentum non vulputate vel, consequat in nisl.
              Aliquam erat volutpat. Nam orci magna, ornare vel tortor a,
              elementum rhoncus metus. Mauris tempor vehicula lectus at tempus.
              Ut ac rutrum orci. Donec ante nunc, dapibus sed ullamcorper
              varius, pharetra eu est. Proin sit amet volutpat quam. Etiam
              suscipit faucibus fringilla.
            </Paragraphs>
          </div>
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>3. MENORES DE EDAD</span>
            </ParagraphTop>
            <Paragraphs blue>
              Nullam mi urna, finibus placerat ligula id, imperdiet auctor eros.
              Vivamus feugiat eget tortor sed bibendum. Aenean sollicitudin,
              risus vel suscipit tincidunt, elit dui tempus elit, at ultrices
              lectus enim vitae diam. Vivamus purus ex, eleifend nec commodo
              sed, placerat eu neque. Ut diam metus, accumsan sit amet fermentum
              a, tempor quis tellus. Mauris blandit commodo mi, eu imperdiet
              lectus tristique et. Nunc tincidunt condimentum egestas.
              Vestibulum venenatis eget ipsum eu viverra. Sed auctor urna in
              enim ornare blandit. Duis pharetra massa purus, sed sodales dolor
              luctus vestibulum.
            </Paragraphs>
          </div>
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>
                4. RESPONSABILIDAD DE LOS USUARIOS POR USO DEL SITIO WEB Y/O LOS
                CONTENIDOS
              </span>
            </ParagraphTop>
            <Paragraphs blue>
              Vivamus nec tellus non mi varius dapibus at sit amet eros. Morbi
              sodales nulla urna. Vestibulum sed nunc dolor. Etiam nec ligula
              sagittis, volutpat nisi non, dignissim mi. Mauris facilisis ex
              eget velit scelerisque tincidunt. Cras bibendum nibh quis massa
              scelerisque, id congue nibh convallis. Praesent molestie nibh non
              nisi fringilla bibendum. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Donec condimentum egestas leo. Praesent tempor
              tortor ac lectus auctor, et vestibulum nulla suscipit. Curabitur
              id ligula semper risus aliquet fringilla vel lacinia nisi.
              Praesent commodo dolor at leo volutpat efficitur. Maecenas in
              velit egestas, vestibulum nulla eu, convallis sapien. Sed sed
              turpis turpis.
            </Paragraphs>
            <Paragraphs blue>
              Ut dictum porttitor mi id porttitor. Etiam tristique faucibus dui
              in ornare. Ut sed sapien vitae massa mollis gravida. Aliquam
              congue semper nisi, quis viverra turpis placerat a. Donec
              elementum est id cursus convallis. Pellentesque consequat eros vel
              eros elementum, in imperdiet turpis ultrices. Proin ac tellus
              feugiat, blandit metus id, ullamcorper augue. Maecenas eget nulla
              lorem. Aenean tincidunt, eros vel pulvinar efficitur, leo nulla
              luctus elit, et ullamcorper ipsum turpis ac nibh. Praesent dapibus
              maximus ornare. Morbi metus felis, mollis id tempus in,
              scelerisque nec ante. Quisque dignissim fermentum quam, vel
              volutpat augue rutrum eu. Nullam maximus tempor massa. Nunc porta
              semper tellus vel fringilla. Duis euismod dictum dictum. Etiam
              lobortis iaculis tempus.
            </Paragraphs>
          </div>
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>5. IDENTIFICADORES DE USUARIO Y CONTRASEÑA</span>
            </ParagraphTop>
            <Paragraphs blue>
              Praesent ac dignissim sem, sed placerat velit. Suspendisse
              molestie mattis dignissim. In viverra ullamcorper fringilla. Donec
              placerat id quam quis cursus. Proin tristique consequat porttitor.
              In ac magna sapien. In porttitor consectetur purus nec finibus.
              Maecenas imperdiet nulla vel ex ullamcorper efficitur. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Vestibulum dapibus ornare
              imperdiet. Phasellus tincidunt metus non quam maximus, ut eleifend
              tellus sodales. Nunc in ante felis. Proin enim leo, eleifend eu
              viverra at, fermentum in lorem.
            </Paragraphs>
          </div>
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>
                6. CONDICIONES PARTICULARES EN PARTICIPACIÓN EN CONCURSOS Y
                SORTEOS
              </span>
            </ParagraphTop>
            <Paragraphs blue>
              Vivamus porttitor auctor erat id aliquet. Vivamus elementum ipsum
              nec dolor tristique ullamcorper non eu orci. Nunc viverra
              elementum nisl id maximus. Ut semper congue sapien, a ultrices leo
              scelerisque nec. Pellentesque libero tortor, euismod efficitur
              velit at, imperdiet sodales quam. Curabitur efficitur suscipit
              ipsum, vel semper turpis gravida eget. In a dui at libero gravida
              viverra. Integer orci urna, rhoncus sit amet luctus ac, tincidunt
              in lectus. Morbi nisl orci, pulvinar vel ornare nec, bibendum nec
              dolor. Suspendisse quam felis, tincidunt ac metus at, sagittis
              molestie ipsum. In volutpat consectetur iaculis. Donec vitae lorem
              lectus. Nam ultricies risus et arcu posuere lacinia.
            </Paragraphs>
          </div>
          <div data-aos="fade-up">
            <ParagraphTop blue>
              <span>7. PROPIEDAD INTELECTUAL E INDUSTRIAL</span>
            </ParagraphTop>
            <Paragraphs blue>
              Mauris molestie id ante at congue. Donec sollicitudin mi bibendum
              velit pharetra congue. In scelerisque ex vitae laoreet fringilla.
              Phasellus ultricies fringilla tristique. Nullam eget quam dui.
              Proin quam lectus, pharetra sit amet porttitor sed, tincidunt ac
              neque. Aliquam nec erat at neque sodales pretium scelerisque nec
              leo. Vestibulum libero odio, porttitor nec est a, egestas cursus
              leo. Aliquam eget odio id ligula venenatis consequat sit amet nec
              turpis. Cras aliquet nisi sit amet nunc varius volutpat.
            </Paragraphs>
            <Paragraphs blue>
              Praesent id tempus urna, eu condimentum leo. Nulla eget ornare
              lacus. Ut vel maximus tellus, sit amet tempus quam. Donec egestas
              in turpis vel sagittis. Aliquam molestie ac tellus at
              sollicitudin. Curabitur finibus odio et fringilla pretium.
              Curabitur aliquam felis tortor, et tincidunt justo dictum ac.
              Morbi maximus a lectus et molestie. Curabitur congue dignissim
              arcu vel pharetra. Aliquam id vulputate massa. Aliquam ut suscipit
              augue, a consequat enim. Quisque vitae condimentum ipsum.
            </Paragraphs>
          </div>
        </TermsBox>
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
