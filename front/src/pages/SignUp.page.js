import React from "react";
import { doSignup, useUserSetter } from "../../lib/auth.api";
import { withRouter } from "react-router-dom";
import { LoginSignupForm } from "../components/LoginSignupForm";

// withRouter is a HighOrderComponent (HOC)
export const SignUpPage = withRouter(({ history }) => {
  const setUser = useUserSetter();

  const handleSubmit = async (username, password) => {
    const user = await doSignup(username, password);
    setUser(user);
    // Redirige el router a la HOME
    history.push("/");
  };

  return (
    <div>
      <h2>SignUp</h2>
      {/* <LoginSignupForm
        handleSubmit={handleSubmit}
      /> */}
      <LoginSignupForm {...{ handleSubmit }} />
    </div>
  );
});
