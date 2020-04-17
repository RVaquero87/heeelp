//React
import React, { useContext, useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Form
import { useForm, FormContext } from "react-hook-form";

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
  SectionCreateAidsRequest,
  Button,
  ParagraphTop,
  Paragraphs,
  FaqsBox,
  SectionAidsRequest,
  FormBox,
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
import { createAidRequest } from "../services/aidRequestServices";

//Compoments
import { ItemServicies } from "../components/ItemServices/Index";
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";
import { InputBox } from "../components/Input/index";
import { TextAreaBox } from "../components/TextArea/index";
import { SelectBox } from "../components/Select/index";
import { AidsRequestBox } from "../components/ItemAidRequest/Index";

export const MyRequests = () => {
  const {
    user,
    aidsRequestId,
    changeAidsRequest,
    setChangeAidsRequest,
    setMessageError,
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

  //Tab Form Aid Request
  const [getFormAidRequest, setGetFormAidRequest] = useState(false);

  //Tab more 3 aids expand
  const [expandAidsCreacion, setExpandAidsCreacion] = useState(false);
  const [expandAidsPublicada, setExpandAidsPublicada] = useState(false);
  const [expandAidsCurso, setExpandAidsCurso] = useState(false);
  const [expandAidsRealizada, setExpandAidsRealizada] = useState(false);
  const [expandAidsCancelada, setExpandAidsCancelada] = useState(false);

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      content: "",
      price: "",
      time: "",
      type: "",
    },
  });

  const { register, handleSubmit, errors } = methods;

  const createNewAidRequest = async (data) => {
    const responseServer = await createAidRequest(data);
    setGetFormAidRequest(!getFormAidRequest);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <>
      {!aidsRequestId ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight" justify="evenly" className="z1">
            <Col2HeaderHomeRol className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Mis peticiones</H1>
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

          {user?.rol == "Helped" && (
            <>
              <SectionBox bgColor="grey" column>
                <SectionCreateAidsRequest
                  className="contain"
                  data-aos="fade-up"
                >
                  <div
                    className={
                      getFormAidRequest ? "content-text active" : "content-text"
                    }
                  >
                    <ParagraphTop blue>
                      <span>
                        Maecenas vel rutrum sem. Cras id suscipit lacus, eu
                        egestas orci. In elit mauris, sollicitudin dignissim mi
                        id, dignissim suscipit justo.
                      </span>
                    </ParagraphTop>
                    <Button
                      type="transparent-blue"
                      big
                      onClick={(e) => setGetFormAidRequest(!getFormAidRequest)}
                    >
                      {getFormAidRequest
                        ? " Cerrar Formulario"
                        : "Crear una petición"}
                    </Button>
                  </div>
                  {getFormAidRequest && (
                    <FormContext {...methods}>
                      <FormBox
                        onSubmit={handleSubmit(createNewAidRequest)}
                        data-aos="fade-down"
                      >
                        <H2 color="blue">Escribe tu petición</H2>
                        <InputBox
                          label="Pon un título a tu petición (70 max)"
                          name="title"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                            maxLength: {
                              value: 70,
                              message:
                                "Este campo solo admite un máximo de 70 caracteres",
                            },
                          })}
                        />
                        <TextAreaBox
                          label="Haz una descripción"
                          name="content"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />
                        <SelectBox
                          label="¿De qué tipo es tu petición?"
                          name="type"
                          value={[
                            "Animales domésticos",
                            "Lavandería",
                            "Parafarmacia",
                            "Supermercado",
                            "Tareas domésticas",
                          ]}
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />
                        <InputBox
                          label="¿Cuándo o antes de que día debe realizarse?"
                          name="time"
                          type="date"
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />
                        <SelectBox
                          label="¿Cuanto estás dispuesto a pagar?"
                          name="price"
                          options={[
                            "No puedo permitirme pagar nada",
                            "Puedo permitirme pagar 5€/hora",
                            "Puedo permitirme pagar 6€/hora",
                            "Puedo permitirme pagar 7€/hora",
                            "Puedo permitirme pagar 8€/hora",
                            "Puedo permitirme pagar 9€/hora",
                            "Puedo permitirme pagar 10€/hora",
                          ]}
                          value={[
                            "Free",
                            "5€/hora",
                            "6€/hora",
                            "7€/hora",
                            "8€/hora",
                            "9€/hora",
                            "10€/hora",
                          ]}
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />

                        <Button type="submit" big>
                          Crear Petición
                        </Button>
                      </FormBox>
                    </FormContext>
                  )}
                </SectionCreateAidsRequest>
              </SectionBox>

              <SectionBox justify="center" column>
                <SectionAidsRequest
                  className={
                    aidsRequestId.filter(
                      (aids) => aids?.status == "En creación"
                    ).length == 0
                      ? "contain my-request-aids zero-aids"
                      : "contain my-request-aids"
                  }
                  data-aos="fade-up"
                >
                  <H2 color="black">
                    <span>
                      Peticiones en{" "}
                      <span className="item-block">
                        creación (
                        {
                          aidsRequestId.filter(
                            (aids) => aids?.status == "En creación"
                          ).length
                        }
                        )
                      </span>
                    </span>
                  </H2>
                  <div className="box-aids">
                    {aidsRequestId.filter(
                      (aids) => aids?.status == "En creación"
                    ).length == 0 ? (
                      <Paragraphs blue>
                        <span>
                          {user?.name} {user?.lastname.slice(0, 1)}. no tienes
                          ninguna petición en creación o borrador.
                        </span>
                      </Paragraphs>
                    ) : (
                      <>
                        {aidsRequestId.filter(
                          (aids) => aids?.status == "En creación"
                        ).length > 3 ? (
                          <>
                            <>
                              {(expandAidsCreacion && (
                                <>
                                  {aidsRequestId
                                    .filter(
                                      (aids) => aids?.status == "En creación"
                                    )
                                    .map((aids, i) => {
                                      return (
                                        <AidsRequestBox
                                          aidrequest={aids}
                                          key={i}
                                        />
                                      );
                                    })}
                                </>
                              )) || (
                                <>
                                  {aidsRequestId
                                    .filter(
                                      (aids) => aids?.status == "En creación"
                                    )
                                    .map((aids, i) => {
                                      if (i <= 2) {
                                        return (
                                          <AidsRequestBox
                                            aidrequest={aids}
                                            key={i}
                                          />
                                        );
                                      }
                                    })}
                                </>
                              )}
                            </>
                            <div className="box-button">
                              <Button
                                big
                                onClick={(e) =>
                                  setExpandAidsCreacion(!expandAidsCreacion)
                                }
                              >
                                {(expandAidsCreacion &&
                                  "Ver menos peticiones") ||
                                  "Ver más peticiones"}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            {aidsRequestId
                              .filter((aids) => aids?.status == "En creación")
                              .map((aids, i) => {
                                return (
                                  <AidsRequestBox aidrequest={aids} key={i} />
                                );
                              })}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </SectionAidsRequest>
              </SectionBox>

              <SectionBox justify="center" column>
                <SectionAidsRequest
                  className={
                    aidsRequestId.filter((aids) => aids?.status == "Publicada")
                      .length == 0
                      ? "contain my-request-aids zero-aids"
                      : "contain my-request-aids"
                  }
                  data-aos="fade-up"
                >
                  <H2 color="black">
                    <span>
                      Peticiones{" "}
                      <span className="item-block">
                        publicadas (
                        {
                          aidsRequestId.filter(
                            (aids) => aids?.status == "Publicada"
                          ).length
                        }
                        )
                      </span>
                    </span>
                  </H2>
                  <div className="box-aids">
                    {aidsRequestId.filter((aids) => aids?.status == "Publicada")
                      .length == 0 ? (
                      <Paragraphs blue>
                        <span>
                          {user?.name} {user?.lastname.slice(0, 1)}. no tienes
                          ninguna petición publicada en estos momentos.
                        </span>
                      </Paragraphs>
                    ) : (
                      <>
                        {aidsRequestId.filter(
                          (aids) => aids?.status == "Publicada"
                        ).length > 3 ? (
                          <>
                            <>
                              {(expandAidsPublicada && (
                                <>
                                  {aidsRequestId
                                    .filter(
                                      (aids) => aids?.status == "Publicada"
                                    )
                                    .map((aids, i) => {
                                      return (
                                        <AidsRequestBox
                                          aidrequest={aids}
                                          key={i}
                                        />
                                      );
                                    })}
                                </>
                              )) || (
                                <>
                                  {aidsRequestId
                                    .filter(
                                      (aids) => aids?.status == "Publicada"
                                    )
                                    .map((aids, i) => {
                                      if (i <= 2) {
                                        return (
                                          <AidsRequestBox
                                            aidrequest={aids}
                                            key={i}
                                          />
                                        );
                                      }
                                    })}
                                </>
                              )}
                            </>
                            <div className="box-button">
                              <Button
                                big
                                onClick={(e) =>
                                  setExpandAidsPublicada(!expandAidsPublicada)
                                }
                              >
                                {(expandAidsPublicada &&
                                  "Ver menos peticiones") ||
                                  "Ver más peticiones"}
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            {aidsRequestId
                              .filter((aids) => aids?.status == "Publicada")
                              .map((aids, i) => {
                                return (
                                  <AidsRequestBox aidrequest={aids} key={i} />
                                );
                              })}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </SectionAidsRequest>
              </SectionBox>
            </>
          )}

          <SectionBox justify="center" column>
            <SectionAidsRequest
              className={
                aidsRequestId.filter((aids) => aids?.status == "En curso")
                  .length == 0
                  ? "contain my-request-aids zero-aids"
                  : "contain my-request-aids"
              }
              data-aos="fade-up"
            >
              <H2 color="black">
                <span>
                  Peticiones en{" "}
                  <span className="item-block">
                    curso (
                    {
                      aidsRequestId.filter((aids) => aids?.status == "En curso")
                        .length
                    }
                    )
                  </span>
                </span>
              </H2>
              <div className="box-aids">
                {aidsRequestId.filter((aids) => aids?.status == "En curso")
                  .length == 0 ? (
                  <Paragraphs blue>
                    <span>
                      {user?.name} {user?.lastname.slice(0, 1)}. no tienes
                      ninguna petición en curso.
                    </span>
                  </Paragraphs>
                ) : (
                  <>
                    {aidsRequestId.filter((aids) => aids?.status == "En curso")
                      .length > 3 ? (
                      <>
                        <>
                          {(expandAidsCurso && (
                            <>
                              {aidsRequestId
                                .filter((aids) => aids?.status == "En curso")
                                .map((aids, i) => {
                                  return (
                                    <AidsRequestBox aidrequest={aids} key={i} />
                                  );
                                })}
                            </>
                          )) || (
                            <>
                              {aidsRequestId
                                .filter((aids) => aids?.status == "En curso")
                                .map((aids, i) => {
                                  if (i <= 2) {
                                    return (
                                      <AidsRequestBox
                                        aidrequest={aids}
                                        key={i}
                                      />
                                    );
                                  }
                                })}
                            </>
                          )}
                        </>
                        <div className="box-button">
                          <Button
                            big
                            onClick={(e) =>
                              setExpandAidsCurso(!expandAidsCurso)
                            }
                          >
                            {(expandAidsCurso && "Ver menos peticiones") ||
                              "Ver más peticiones"}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        {aidsRequestId
                          .filter((aids) => aids?.status == "En curso")
                          .map((aids, i) => {
                            return <AidsRequestBox aidrequest={aids} key={i} />;
                          })}
                      </>
                    )}
                  </>
                )}
              </div>
            </SectionAidsRequest>
          </SectionBox>

          <SectionBox justify="center" column>
            <SectionAidsRequest
              className={
                aidsRequestId.filter((aids) => aids?.status == "Realizada")
                  .length == 0
                  ? "contain my-request-aids zero-aids"
                  : "contain my-request-aids"
              }
              data-aos="fade-up"
            >
              <H2 color="black">
                <span>
                  Peticiones{" "}
                  <span className="item-block">
                    realizadas (
                    {
                      aidsRequestId.filter(
                        (aids) => aids?.status == "Realizada"
                      ).length
                    }
                    )
                  </span>
                </span>
              </H2>
              <div className="box-aids">
                {aidsRequestId.filter((aids) => aids?.status == "Realizada")
                  .length == 0 ? (
                  <Paragraphs blue>
                    <span>
                      {user?.name} {user?.lastname.slice(0, 1)}.{" "}
                      {user?.rol === "Helpers"
                        ? `aun no has realizado ninguna petición.`
                        : `aun no te han realizado ninguna petición.`}
                    </span>
                  </Paragraphs>
                ) : (
                  <>
                    {aidsRequestId.filter((aids) => aids?.status == "Realizada")
                      .length > 3 ? (
                      <>
                        <>
                          {(expandAidsRealizada && (
                            <>
                              {aidsRequestId
                                .filter((aids) => aids?.status == "Realizada")
                                .map((aids, i) => {
                                  return (
                                    <AidsRequestBox aidrequest={aids} key={i} />
                                  );
                                })}
                            </>
                          )) || (
                            <>
                              {aidsRequestId
                                .filter((aids) => aids?.status == "Realizada")
                                .map((aids, i) => {
                                  if (i <= 2) {
                                    return (
                                      <AidsRequestBox
                                        aidrequest={aids}
                                        key={i}
                                      />
                                    );
                                  }
                                })}
                            </>
                          )}
                        </>
                        <div className="box-button">
                          <Button
                            big
                            onClick={(e) =>
                              setExpandAidsRealizada(!expandAidsRealizada)
                            }
                          >
                            {(expandAidsRealizada && "Ver menos peticiones") ||
                              "Ver más peticiones"}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        {aidsRequestId
                          .filter((aids) => aids?.status == "Realizada")
                          .map((aids, i) => {
                            return <AidsRequestBox aidrequest={aids} key={i} />;
                          })}
                      </>
                    )}
                  </>
                )}
              </div>
            </SectionAidsRequest>
          </SectionBox>

          {user?.rol === "Helped" && (
            <SectionBox justify="center" column>
              <SectionAidsRequest
                className={
                  aidsRequestId.filter((aids) => aids?.status == "Cancelada")
                    .length == 0
                    ? "contain my-request-aids zero-aids"
                    : "contain my-request-aids"
                }
                data-aos="fade-up"
              >
                <H2 color="black">
                  <span>
                    Peticiones{" "}
                    <span className="item-block">
                      canceladas (
                      {
                        aidsRequestId.filter(
                          (aids) => aids?.status == "Cancelada"
                        ).length
                      }
                      )
                    </span>
                  </span>
                </H2>
                <div className="box-aids">
                  {aidsRequestId.filter((aids) => aids?.status == "Cancelada")
                    .length == 0 ? (
                    <Paragraphs blue>
                      <span>
                        {user?.name} {user?.lastname.slice(0, 1)}. no has
                        cancelado ninguna petición.
                      </span>
                    </Paragraphs>
                  ) : (
                    <>
                      {aidsRequestId.filter(
                        (aids) => aids?.status == "Cancelada"
                      ).length > 3 ? (
                        <>
                          <>
                            {(expandAidsCancelada && (
                              <>
                                {aidsRequestId
                                  .filter((aids) => aids?.status == "Cancelada")
                                  .map((aids, i) => {
                                    return (
                                      <AidsRequestBox
                                        aidrequest={aids}
                                        key={i}
                                      />
                                    );
                                  })}
                              </>
                            )) || (
                              <>
                                {aidsRequestId
                                  .filter((aids) => aids?.status == "Cancelada")
                                  .map((aids, i) => {
                                    if (i <= 2) {
                                      return (
                                        <AidsRequestBox
                                          aidrequest={aids}
                                          key={i}
                                        />
                                      );
                                    }
                                  })}
                              </>
                            )}
                          </>
                          <div className="box-button">
                            <Button
                              big
                              onClick={(e) =>
                                setExpandAidsCancelada(!expandAidsCancelada)
                              }
                            >
                              {(expandAidsCancelada &&
                                "Ver menos peticiones") ||
                                "Ver más peticiones"}
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          {aidsRequestId
                            .filter((aids) => aids?.status == "Cancelada")
                            .map((aids, i) => {
                              return (
                                <AidsRequestBox aidrequest={aids} key={i} />
                              );
                            })}
                        </>
                      )}
                    </>
                  )}
                </div>
              </SectionAidsRequest>
            </SectionBox>
          )}

          <SectionBox bgColor="orange" column className="myrequest-mt">
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
      )}
    </>
  );
};

export const MyRequestsPrivate = withProtected(MyRequests, {
  redirect: false,
});
