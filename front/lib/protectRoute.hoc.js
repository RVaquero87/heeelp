import React from "react";
import { useUser, useUserIsLoading } from "./auth.api";
import { Redirect } from "react-router-dom";
import {ProtectedPage} from "../src/pages/Protected.page"

export const withProtected = (Component, { redirect = true, redirectTo = "/" } = {} ) => props => {

  
  const user = useUser();// Cambiarlo por contexto user



  const isUserLoading = useUserIsLoading();

  if (user) {
    return <Component />;
  } else {
    if (isUserLoading) return <ProtectedPage />;
    else {
      if (redirect) {
        return <Redirect to={redirectTo} />;
      } else {
        return <ProtectedPage />;
      }
    }
  }
};
