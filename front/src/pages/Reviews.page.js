//React
import React, { useContext, useEffect, useState } from "react";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  ContainDivDefault,
  ContentText,
  BoxImg,
  H1,
  H2,
  Button,
  ParagraphTop,
  Paragraphs,
  Col2Min,
  SectionReviewsHeader,
  SectionCreateReview,
  SectionReviews,
  FaqsBox,
  FilterStars,
  FormBox,
} from "../styles/Index.styles";

//Images
import contact from "../../public/images/contact.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";
import { createReview } from "../services/reviewsServices";

//Compoments
import ButtonLink from "../components/ButtonLink";
import AccordionFaqs from "../components/ItemsAccordion";
import ReviewsBoxItem from "../components/ListItemReviews";
import Loading from "../components/Loading";
import InputBox from "../components/Input";
import TextAreaBox from "../components/TextArea";
import SelectBox from "../components/Select";

export const ReviewsPage = () => {
  const {
    user,
    changeListReviews,
    setchangeListReviews,
    listReviews,
    filterReviews,
    setFilterReviews,
    listIDReviews,
    averageReviews,
    setMessageError,
  } = useContext(PrincipalContext);

  const [getFormReviews, setGetFormReviews] = useState();

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Filter stars
  const handleFilterReviews = async (e, value) => {
    e.preventDefault();
    let filter = await listReviews.filter((item) => {
      return item.stars == value;
    });
    setFilterReviews(filter);
    if (value === "all") {
      setchangeListReviews(!changeListReviews);
    }
  };

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      message: "",
      stars: "",
    },
  });

  const { register, handleSubmit, errors } = methods;

  const getReviewsNew = async (data) => {
    const responseServer = await createReview(data);
    setGetFormReviews(!getFormReviews);
    setchangeListReviews(!changeListReviews);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
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
                      {listReviews && averageReviews}
                      <span>/5</span>
                    </ParagraphTop>
                  </div>
                </div>
              </div>
            </SectionReviewsHeader>
          </SectionBox>
          {user && (
            <>
              <SectionBox bgColor="grey" column>
                <SectionCreateReview className="contain" data-aos="fade-up">
                  <div
                    className={
                      getFormReviews ? "content-text active" : "content-text"
                    }
                  >
                    <ParagraphTop blue>
                      <span>
                        Duis leo lorem, interdum in augue id, posuere viverra
                        enim. Proin lacus neque, fermentum et metus sed,
                        facilisis porta massa.
                      </span>
                    </ParagraphTop>
                    <Button
                      type="transparent-blue"
                      big
                      onClick={() => setGetFormReviews(!getFormReviews)}
                    >
                      {getFormReviews
                        ? " Cerrar Formulario"
                        : "ESCRIBIR UNA OPINIÓN"}
                    </Button>
                  </div>
                  {getFormReviews && (
                    <FormContext {...methods}>
                      <FormBox
                        onSubmit={handleSubmit(getReviewsNew)}
                        data-aos="fade-down"
                      >
                        <H2 color="blue">Escribe tu opinión</H2>
                        <InputBox
                          label="Pon un título a tu opinión (40 max)"
                          name="title"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                            maxLength: {
                              value: 40,
                              message:
                                "Este campo solo admite un máximo de 40 caracteres",
                            },
                          })}
                        />
                        <TextAreaBox
                          label="Haz una descripción"
                          name="message"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />
                        <SelectBox
                          label="Da una valoración"
                          name="stars"
                          value={[0, 1, 2, 3, 4, 5]}
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />

                        <button type="submit" className="button">
                          Aceptar
                        </button>
                      </FormBox>
                    </FormContext>
                  )}
                </SectionCreateReview>
              </SectionBox>

              <SectionBox column>
                <SectionReviews className="contain my-reviews">
                  <div className="box-faqs">
                    <div
                      className={user ? "box-title active" : "box-title"}
                      data-aos="fade-up"
                    >
                      <H2 color="blue">
                        Mis opiniones{" "}
                        {listIDReviews ? `(${listIDReviews.length})` : "(0)"}
                      </H2>
                    </div>
                    <div className="box-reviews">
                      {listIDReviews && listIDReviews.length > 0 ? (
                        <>
                          {listIDReviews &&
                            listIDReviews
                              .sort((a, b) => b.createdAt - a.createdAt)
                              .map((review, i) => {
                                return (
                                  <ReviewsBoxItem review={review} key={i} />
                                );
                              })}
                        </>
                      ) : (
                        <Paragraphs blue>
                          No tienes ninguna opinón. ¿A qué esperas? Dano tu
                          opinión.
                        </Paragraphs>
                      )}
                    </div>
                  </div>
                </SectionReviews>
              </SectionBox>
            </>
          )}

          <SectionBox column>
            <SectionReviews className="contain">
              <div className="box-faqs">
                <div
                  className={user ? "box-title active" : "box-title"}
                  data-aos="fade-up"
                >
                  {user ? (
                    <H2 color="blue">
                      Las opiniones de otros usuarios (
                      {listIDReviews && listReviews.length})
                    </H2>
                  ) : (
                    <>
                      {" "}
                      <H2 color="blue">
                        Nunc ultricies purus eu molestie volutpat.
                      </H2>
                      <Paragraphs blue>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi lectus nulla, porttitor nec arcu non, facilisis
                        sollicitudin.
                      </Paragraphs>
                    </>
                  )}
                </div>
                <FilterStars data-aos="fade-up">
                  <div className="box-filter">
                    <select
                      onChange={(e) => handleFilterReviews(e, e.target.value)}
                    >
                      <option value="all">Filtra por valoración</option>
                      <option value="0">0 Estrellas</option>
                      <option value="1">1 Estrellas</option>
                      <option value="2">2 Estrellas</option>
                      <option value="3">3 Estrellas</option>
                      <option value="4">4 Estrellas</option>
                      <option value="5">5 Estrellas</option>
                      <option value="all">Todas las opiniones</option>
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
                            if (review.creatorUserid?._id != user?._id) {
                              return <ReviewsBoxItem review={review} key={i} />;
                            }
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
              <AccordionFaqs />
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
      )}
    </>
  );
};
