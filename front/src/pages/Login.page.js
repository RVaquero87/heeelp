//React
import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

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
  FormBox,
  SectionFormBox,
} from "../styles/Index.styles";

//Images
import girlComputer from "../../public/images/girl-computer.png";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doLogin } from "../services/authServices";
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { InputBox } from "../components/Input";

export const LoginPage = withRouter(({ history }) => {
  const { setUser, setMessageError } = useContext(PrincipalContext);

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
      if (responseServer.rol === "Admin") {
        history.push("/control-admin");
      } else {
        history.push("/home");
      }
    }
  };
  return (
    <>
      <SectionBox bgColor="blueLight" justify="evenly" className="z1">
        <Col2HeaderLogin className="contain" data-aos="fade-up">
          <ContentText>
            <H1>
              Accede a <span className="item-light">h</span>eee
              <span className="item-light">lp!</span>
            </H1>
          </ContentText>
          <BoxImg>
            <img src={girlComputer} alt="heeelp!" title="heeelp!" />
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
                    message: "El campo es requerido",
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
    </>
  );
});
