//React
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";

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
  SectionHeaderSingleTitle,
  SectionAidsRequest,
  FormBox,
} from "../styles/Index.styles";

//Images
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
import {
  getOneAidRequest,
  editDataAidRequest,
} from "../services/aidRequestServices";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";
import { InputBox } from "../components/Input/index";
import { TextAreaBox } from "../components/TextArea/index";
import { SelectBox } from "../components/Select/index";
import { Loading } from "../components/Loading/index";

export const MyRequestDetailsRolPage = withRouter(({ history }) => {
  const {
    user,
    changeAidsRequest,
    setChangeAidsRequest,
    setMessageError,
  } = useContext(PrincipalContext);
  const { id } = useParams();

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Get One ID AID REQUEST
  const [aidRequestOne, setAidRequestOne] = useState();
  const [aidRequestOneChange, setAidRequestOneChange] = useState();

  useEffect(() => {
    getOneAidRequest(id)
      .then((aidRequest) => {
        setAidRequestOne(aidRequest[0]);
      })
      .catch((e) => {});
  }, [aidRequestOneChange]);

  //Tab Form EDIT Aid Request && Tab Form Create or Edit list
  const [getEditForm, setGetEditForm] = useState(false);
  const [getCreateEditListForm, setGetCreateEditListForm] = useState(false);

  //Date SHORT
  const dateAidRequest = aidRequestOne?.time.slice(0, 10);

  //Form EDIT AID REQUEST
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      title: aidRequestOne?.title,
      content: aidRequestOne?.content,
      price: aidRequestOne?.price,
      time: dateAidRequest,
    },
  });

  useEffect(() => {
    methods.reset({
      title: aidRequestOne?.title,
      content: aidRequestOne?.content,
      price: aidRequestOne?.price,
      time: dateAidRequest,
    });
  }, [aidRequestOne]);

  const { register, handleSubmit, errors } = methods;

  const editAidRequest = async (data) => {
    const objectdata = { _id: id, ...data };
    const responseServer = await editDataAidRequest(objectdata);
    setGetEditForm(!getEditForm);
    setAidRequestOneChange(!aidRequestOneChange);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <>
      {!aidRequestOne ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight">
            <SectionHeaderSingleTitle className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Detalle de petición</H1>
                <button
                  className="button-back"
                  onClick={(e) => history.goBack()}
                >
                  Volver
                </button>
              </ContentText>
            </SectionHeaderSingleTitle>
          </SectionBox>
          {user?.rol == "Helped" && aidRequestOne?.status == "En creación" && (
            <>
              <SectionBox bgColor="grey" column>
                <SectionCreateAidsRequest
                  className="contain"
                  data-aos="fade-up"
                >
                  <div
                    className={
                      getEditForm ? "content-text active" : "content-text"
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
                      onClick={(e) => setGetEditForm(!getEditForm)}
                    >
                      {getEditForm ? " Cerrar Formulario" : "Editar petición"}
                    </Button>
                  </div>
                  {getEditForm && (
                    <FormContext {...methods}>
                      <FormBox
                        onSubmit={handleSubmit(editAidRequest)}
                        data-aos="fade-down"
                      >
                        <H2 color="blue">Edita tu petición</H2>
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
                            "Puedo permitirme pagar 5€/h",
                            "Puedo permitirme pagar 6€/h",
                            "Puedo permitirme pagar 7€/h",
                            "Puedo permitirme pagar 8€/h",
                            "Puedo permitirme pagar 9€/h",
                            "Puedo permitirme pagar 10€/h",
                          ]}
                          value={[
                            "Free",
                            "5€/h",
                            "6€/h",
                            "7€/h",
                            "8€/h",
                            "9€/h",
                            "10€/h",
                          ]}
                          ref={register({
                            required: {
                              value: true,
                              message: "El campo es requerido",
                            },
                          })}
                        />

                        <button type="submit" className="button">
                          Editar Petición
                        </button>
                      </FormBox>
                    </FormContext>
                  )}
                </SectionCreateAidsRequest>
              </SectionBox>
            </>
          )}

          <p>{aidRequestOne.price}</p>
          <p>{aidRequestOne.status}</p>

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
      )}
    </>
  );
});

export const MyRequestDetailsRolPagePrivate = withProtected(
  MyRequestDetailsRolPage,
  {
    redirect: false,
  }
);
