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

export const ListAidsRequestPage = () => {
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
                <H1>Listado de peticiones</H1>
              </ContentText>
              <BoxImg className="helper">
                <img src={youngGirl} alt="heeelp!" title="heeelp!" />
              </BoxImg>
            </Col2HeaderHomeRol>
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
                    {aidsRequestId.filter((aids) => aids?.status == "Publicada")
                      .length >= 3 ? (
                      <>
                        <>
                          {(expandAidsPublicada && (
                            <>
                              {aidsRequestId
                                .filter((aids) => aids?.status == "Publicada")
                                .map((aids, i) => {
                                  return (
                                    <AidsRequestBox aidrequest={aids} key={i} />
                                  );
                                })}
                            </>
                          )) || (
                            <>
                              {aidsRequestId
                                .filter((aids) => aids?.status == "Publicada")
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
                            {(expandAidsPublicada && "Ver menos") || "Ver más"}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        {aidsRequestId
                          .filter((aids) => aids?.status == "Publicada")
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

export const ListAidsRequestPagePrivate = withProtected(ListAidsRequestPage, {
  redirect: false,
});
