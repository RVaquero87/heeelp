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
  Col2Min,
  SectionReviewsHeader,
  SectionReviews,
  FaqsBox,
  FilterStars
} from "../../public/styles/Common.styles";

//Images
import contact from "../../public/images/contact.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { getAverage, scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";
import { ReviewsBoxItem } from "../components/ListItemReviews/Index";
import { Loading } from "../components/Loading/index";

export const ReviewsPage = () => {
  const {
    changeListReviews,
    setchangeListReviews,
    listReviews,
    filterReviews,
    setFilterReviews
  } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Filter stars
  const handleFilterReviews = async (e, value) => {
    e.preventDefault();
    let filter = await listReviews.filter(item => {
      return item.stars == value;
    });
    setFilterReviews(filter);
    if (value === "all") {
      setchangeListReviews(!changeListReviews);
    }
  };

  return (
    <>
      {!filterReviews ? (
        <Loading />
      ) : (
        <>
          <SectionBox column bgColor="blueLight">
            <SectionReviewsHeader
              className="contain first-section"
              data-aos="fade-up"
            >
              <div className="box-faqs">
                <H1>
                  La opinión de los usuarios de{" "}
                  <span className="item-light">h</span>eee
                  <span className="item-light">lp!</span>!
                </H1>
                <div className="box-title">
                  <Paragraphs>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi lectus nulla, porttitor nec arcu non, facilisis
                    sollicitudin diam. Nulla ultricies tincidunt dolor. Vivamus
                    gravida sed est et interdum. Morbi dignissim rutrum augue a
                    pretium. Aenean tempor quam ut lectus ullamcorper, eu varius
                    est malesuada. Vivamus gravida mauris id feugiat vulputate.
                    Curabitur sed lectus vitae est dictum suscipit. Integer
                    pretium felis at magna maximus, in molestie mi rutrum. Nam
                    tincidunt ligula erat, eget hendrerit elit pharetra a.
                  </Paragraphs>
                  <div className="average">
                    <ParagraphTop>
                      <span>Nota media del servicio</span>
                    </ParagraphTop>
                    <ParagraphTop>
                      {listReviews &&
                        getAverage(listReviews.map(item => item.stars))}
                      <span>/5</span>
                    </ParagraphTop>
                  </div>
                </div>
              </div>
            </SectionReviewsHeader>
          </SectionBox>

          <SectionBox column>
            <SectionReviews className="contain" data-aos="fade-up">
              <div className="box-faqs">
                <div className="box-title">
                  <H2 color="blue">Alfunas reviews...</H2>
                  <Paragraphs blue>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi lectus nulla, porttitor nec arcu non, facilisis
                    sollicitudin.
                  </Paragraphs>
                </div>
                <FilterStars>
                  <Paragraphs blue>
                    <span>Filtra por el número de Estrellas:</span>
                  </Paragraphs>
                  <div className="box-filter">
                    <select
                      onChange={e => handleFilterReviews(e, e.target.value)}
                    >
                      <option value="all">Todas las opiniones</option>
                      <option value="0">0 Estrellas</option>
                      <option value="1">1 Estrellas</option>
                      <option value="2">2 Estrellas</option>
                      <option value="3">3 Estrellas</option>
                      <option value="4">4 Estrellas</option>
                      <option value="5">5 Estrellas</option>
                    </select>
                  </div>
                </FilterStars>
                <div className="box-reviews">
                  {filterReviews.length === 0 ? (
                    <Paragraphs blue>
                      No existe ninguna opinión con ese número de estrellas.
                    </Paragraphs>
                  ) : (
                    <>
                      {filterReviews &&
                        filterReviews
                          .sort((a, b) => b.stars - a.stars)
                          .map((review, i) => {
                            return <ReviewsBoxItem review={review} key={i} />;
                          })}
                    </>
                  )}
                </div>
              </div>
            </SectionReviews>
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
      )}
    </>
  );
};
