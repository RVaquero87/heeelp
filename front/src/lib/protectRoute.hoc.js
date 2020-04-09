//React
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Page
import { ProtectedPage } from "../pages/Protected.page";

export const withProtected = (
  Component,
  { redirect = true, redirectTo = "/" } = {}
) => (props) => {
  const { user, loading } = useContext(PrincipalContext);

  if (user) {
    return <Component />;
  } else {
    if (loading) return <ProtectedPage />;
    else {
      if (redirect) {
        return <Redirect to={redirectTo} />;
      } else {
        return <ProtectedPage />;
      }
    }
  }
};
