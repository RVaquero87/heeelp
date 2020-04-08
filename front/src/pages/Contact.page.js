//React
import React, { useContext, useEffect } from "react";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  BoxImg,
  H1,
  H2,
  ParagraphTop,
  Paragraphs,
  Col2Header,
  FormBox,
  ContactBox,
  FaqsBox,
} from "../../public/styles/Common.styles";

//Images
import people from "../../public/images/people.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";
import { InputBox } from "../components/Input/Index";
import { TextAreaBox } from "../components/TextArea/Index";

export const ContactPage = () => {
  const { user } = useContext(PrincipalContext);

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
    console.log(data);
    //const responseServer = await createReview(data);
    // setMessageError(responseServer.message);
    // setTimeout(() => {
    //   setMessageError(null);
    // }, 5000);
  };

  return (
    <>
      <SectionBox bgColor="blueLight" justify="between" data-aos="fade-up">
        <Col2Header className="contain">
          <ContentText>
            <H1>Contacto</H1>
            <ParagraphTop>
              Lorem ipsum dolor sit amet,{" "}
              <span>consectetur adipiscing elit</span>. In commodo vehicula
              mauris, facilisis scelerisque purus lobortis feugiat. Aliquam ut
              scelerisque ligula. <span>Vestibulum fringilla augue</span> quis
              elit feugiat, ut ornare nunc interdum.
            </ParagraphTop>
          </ContentText>
          <BoxImg>
            <img src={people} alt="heeelp!" title="heeelp!" />
          </BoxImg>
        </Col2Header>
      </SectionBox>

      <SectionBox data-aos="fade-up" column justify="start">
        <ContactBox className="contain">
          <H2 color="blue">Escribenos... </H2>
          <Paragraphs blue>
            Descubre el servicio que pone en contacto a personas que{" "}
            <span>necesitan ayuda</span> en tareas del día a día con personas
            que <span>están dispuestas a ayudar</span>.
          </Paragraphs>
          <FormContext {...methods}>
            <FormBox onSubmit={handleSubmit(sendContact)} data-aos="fade-up">
              <InputBox
                label="Email"
                name="username"
                ref={register({
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i,
                    message: "El email incluido no es válido",
                  },
                })}
              />
              <InputBox
                label="Resumén tu valoración en una palabras"
                name="title"
                ref={register({
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  maxLength: {
                    value: 50,
                    message: "Máximo 10 caracteres",
                  },
                })}
              />
              <TextAreaBox
                label="Describe tu valoración"
                name="message"
                ref={register({
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              <button type="submit" className="button">
                Crear
              </button>
            </FormBox>
          </FormContext>
        </ContactBox>
      </SectionBox>

      <SectionBox bgColor="orange" column>
        <FaqsBox className="contain" data-aos="fade-up">
          <H2>
            ¿Tienes dudas?
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
    </>
  );
};
