import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";
import { FormBox } from "../../public/styles/Common.styles";
import { InputBox } from "../components/Input/index";
import { doLogin } from "../services/authServices";
import { PrincipalContext } from "../context/PrincipalContext";

export const LoginPage = withRouter(({ history }) => {
  const { user, setUser, setMessageError } = useContext(PrincipalContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const { register, handleSubmit, errors } = methods;

  const onLogin = async data => {
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
    <FormContext {...methods}>
      <FormBox onSubmit={handleSubmit(onLogin)}>
        <div className="left">
          <h1>Iniciar Sesión</h1>
          <InputBox
            label="Usuario"
            name="username"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Este email no es valido"
              }
            })}
          />
          <InputBox
            label="Contraseña"
            type="password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido"
              }
            })}
          />
          <p>
            Si aun no tienes cuenta, puedes crear tu cuenta{" "}
            <Link to="/signup">aquí.</Link>
          </p>

          <button type="submit" className="button">
            Inciar Sesión
          </button>
        </div>
      </FormBox>
    </FormContext>
  );
});
