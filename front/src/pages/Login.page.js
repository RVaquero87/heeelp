import React, { useState } from "react";
import { LoginSignupForm } from "../components/LoginSignupForm";
import { doLogin, useUserSetter } from "../../lib/auth.api";
import { withRouter } from "react-router-dom";

export const LoginPage = withRouter(({ history }) => {
  const [error, setError] = useState();
  const setUser = useUserSetter();
  const handleSubmit = async (username, password) => {
    // Handle errors
    try {
      // CLIENT VALIDATION LOGIC
      if (username == "" || password == "") {
        throw new Error("Oye, no lo pongas el usuario o password vacio");
      }
      const user = await doLogin(username, password);
      // Redirige el router a la HOME
      history.push("/");
      setUser(user);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <LoginSignupForm {...{ handleSubmit }} />
    </div>
  );
});
