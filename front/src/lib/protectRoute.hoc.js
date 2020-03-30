import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../pages/Protected.page";
import { PrincipalContext } from "../context/PrincipalContext";

export const withProtected = (
  Component,
  { redirect = true, redirectTo = "/" } = {}
) => props => {
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
