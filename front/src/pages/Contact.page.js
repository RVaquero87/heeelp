//React
import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  BoxImg,
  H1,
  H2,
  Paragraphs,
  Col2HeaderContact,
  FormBox,
  SectionFormBoxContact,
  FaqsBox,
} from "../styles/Index.styles";

//Images
import contactHeader from "../../public/images/contact-2.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";
import { sendMessageContact } from "../services/contactServices";

//Compoments
import ButtonLink from "../components/ButtonLink";
import AccordionFaqs from "../components/ItemsAccordion";
import InputBox from "../components/Input";
import TextAreaBox from "../components/TextArea";

export const ContactPage = withRouter(({ history }) => {
  const { user, setMessageError } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: user?.username,
    },
  });

  useEffect(() => {
    methods.reset({
      username: user?.username,
    });
  }, [user]);

  const { register, handleSubmit, errors } = methods;

  const sendContact = async (data) => {
    const responseServer = await sendMessageContact(data);
    setMessageError(responseServer.message);
    history.push("/");
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <>
      <SectionBox bgColor="blueLight" justify="evenly" className="z1">
        <Col2HeaderContact className="contain" data-aos="fade-up">
          <ContentText>
            <H1>Contacto</H1>
          </ContentText>
          <BoxImg>
            <img src={contactHeader} alt="heeelp!" title="heeelp!" />
          </BoxImg>
        </Col2HeaderContact>
      </SectionBox>

      <SectionBox data-aos="fade-up" column justify="start">
        <SectionFormBoxContact className="contain">
          <H2 color="blue">Donec sodales mi eget.</H2>
          <Paragraphs blue>
            Proin tortor nulla, semper ut auctor in, vehicula vitae tellus.{" "}
            <span>Aliquam non metus a diam imperdiet tempus. </span> Suspendisse
            condimentum neque eu tellus auctor, at sollicitudin quam efficitur.
          </Paragraphs>
          <FormContext {...methods}>
            <FormBox onSubmit={handleSubmit(sendContact)}>
              <InputBox
                label="Email"
                name="username"
                ref={register({
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i,
                    message: "El email incluido no es válido",
                  },
                })}
              />
              <InputBox
                label="Resumén tu consulta en pocas palabras"
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
                label="Explica que te sucede"
                name="message"
                ref={register({
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              <button type="submit" className="button big">
                Enviar
              </button>
            </FormBox>
          </FormContext>
        </SectionFormBoxContact>
      </SectionBox>

      <SectionBox bgColor="orange" column>
        <FaqsBox className="contain" data-aos="fade-up">
          <H2>
            ¿Tienes dudas?
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
    </>
  );
});
