//React
import React, { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  Col2HeaderLogin,
  ContentText,
  H1,
  H2,
  BoxImg,
  Paragraphs,
  FormBox,
  Col2Min,
  SectionFormBox,
  FaqsBox,
  ContainDivDefault,
} from "../../public/styles/Common.styles";

//Images
import GirlComputer from "../../public/images/girl-computer.png";
import contact from "../../public/images/contact.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doLogin } from "../services/authServices";
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { AccordionFaqsBox } from "../components/ItemAccordion/Index";
import { InputBox } from "../components/Input/Index";
import { TextAreaBox } from "../components/TextArea/Index";

export const LoginPage = withRouter(({ history }) => {
  const { user, setUser, setMessageError } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { register, handleSubmit, errors } = methods;

  const onLogin = async (data) => {
    const responseServer = await doLogin(data);

    if (responseServer.status) {
      setMessageError(responseServer.message);
      setTimeout(() => {
        setUser(null);
        history.push("/login");
      }, 2500);
      setTimeout(() => {
        setMessageError(null);
      }, 5000);
    } else {
      setUser(responseServer);
      history.push("/profile");
    }
  };
  return (
    <>
      <SectionBox
        bgColor="blueLight"
        justify="evenly"
        data-aos="fade-up"
        className="z1"
      >
        <Col2HeaderLogin className="contain">
          <ContentText>
            <H1>
              Accede a <span className="item-light">h</span>eee
              <span className="item-light">lp!</span>
            </H1>
          </ContentText>
          <BoxImg>
            <img src={GirlComputer} alt="heeelp!" title="heeelp!" />
          </BoxImg>
        </Col2HeaderLogin>
      </SectionBox>

      <SectionBox data-aos="fade-up" column justify="start">
        <SectionFormBox className="contain">
          <H2 color="blue">Inicia sesión</H2>
          <FormContext {...methods}>
            <FormBox onSubmit={handleSubmit(onLogin)}>
              <InputBox
                label="Usuario"
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
                label="Contraseña"
                type="password"
                name="password"
                ref={register({
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              <button type="submit" className="button big">
                Enviar
              </button>
            </FormBox>
          </FormContext>
        </SectionFormBox>
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
});
