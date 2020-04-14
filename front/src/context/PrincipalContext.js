//React
import React, { createContext, useState, useEffect } from "react";

//Contexto
export const PrincipalContext = createContext();

//Functional & Services
import { getAllReviews, getIDReview } from "../services/reviewsServices";
import { getAverage } from "../lib/commonFunctional";

export const PrincipalContextProvider = (props) => {
  //Loading State
  const [loading, setLoading] = useState(true);

  //Body Tag
  const Body = document.getElementsByTagName("body");

  //Users Active
  const [user, setUser] = useState();

  //Users List CHange
  const [changeLisUsers, setchangeLisUsers] = useState(false);

  //Message Error Global Form
  const [messageError, setMessageError] = useState();

  //Reviews List CHange
  const [changeListReviews, setchangeListReviews] = useState(false);
  const [listReviews, setListReviews] = useState();
  const [listIDReviews, setListIDReviews] = useState();
  const [filterReviews, setFilterReviews] = useState();
  const [averageReviews, setAverageReviews] = useState();

  useEffect(() => {
    getAllReviews()
      .then((review) => {
        const averageReview = getAverage(review.map((item) => item.stars));
        setAverageReviews(averageReview);
        if (user) {
          const reviewNotId = review.filter(
            (review) => review.creatorUserid._id != user._id
          );
          setListReviews(reviewNotId);
          setFilterReviews(reviewNotId);
        } else {
          setListReviews(review);
          setFilterReviews(review);
        }
      })
      .catch((e) => {});
    if (user) {
      getIDReview(user)
        .then((review) => {
          setListIDReviews(review);
        })
        .catch((e) => {});
    }
  }, [changeListReviews, user]);

  //List Contact Message Change
  const [listMessageContactChange, setListMessageContactChange] = useState();

  //Response Message Contact
  const [responseMessageContact, setResponseMessageContact] = useState();
  const [formSendEmailView, setFormSendEmailView] = useState("false");

  //Register Lightbox
  const [lightboxRegister, setLightboxRegister] = useState(true);

  return (
    <PrincipalContext.Provider
      value={{
        //Loading State
        loading,
        setLoading,

        //Body Tag
        Body,

        //Users Active
        user,
        setUser,

        //Users List CHange
        changeLisUsers,
        setchangeLisUsers,

        //Message Error Global Form
        messageError,
        setMessageError,

        //Reviews List CHange

        changeListReviews,
        setchangeListReviews,
        listReviews,
        setListReviews,
        listIDReviews,
        setListIDReviews,
        filterReviews,
        setFilterReviews,
        averageReviews,
        setAverageReviews,

        //List Contact Message Change
        listMessageContactChange,
        setListMessageContactChange,

        //Response Message Contact
        responseMessageContact,
        setResponseMessageContact,
        formSendEmailView,
        setFormSendEmailView,

        //Register Lightbox
        lightboxRegister,
        setLightboxRegister,
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};
