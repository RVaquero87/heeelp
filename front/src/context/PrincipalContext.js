//React
import React, { createContext, useState, useEffect } from "react";

//Contexto
export const PrincipalContext = createContext();

//Functional & Services
import { getAllReviews } from "../services/reviewsServices";

export const PrincipalContextProvider = (props) => {
  //Loading State
  const [loading, setLoading] = useState(true);

  //Body Tag
  const Body = document.getElementsByTagName("body");

  //Users Active
  const [user, setUser] = useState();

  //Message Error Global Form
  const [messageError, setMessageError] = useState();

  //Users List CHange
  const [changeLisUsers, setchangeLisUsers] = useState(false);

  //Reviews List CHange
  const [changeListReviews, setchangeListReviews] = useState(false);
  const [listReviews, setListReviews] = useState();
  const [filterReviews, setFilterReviews] = useState();

  useEffect(() => {
    getAllReviews()
      .then((review) => {
        setListReviews(review);
        setFilterReviews(review);
      })
      .catch((e) => {});
  }, [changeListReviews]);

  //Register Lightbox
  const [lightboxRegister, setLightboxRegister] = useState(true);

  return (
    <PrincipalContext.Provider
      value={{
        loading,
        Body,
        setLoading,
        user,
        setUser,
        messageError,
        setMessageError,
        changeLisUsers,
        setchangeLisUsers,
        changeListReviews,
        setchangeListReviews,
        listReviews,
        setListReviews,
        filterReviews,
        setFilterReviews,
        lightboxRegister,
        setLightboxRegister,
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};
