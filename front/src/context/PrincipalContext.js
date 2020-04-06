import React, { createContext, useState, useEffect } from "react";
import { getAllReviews } from "../services/reviewsServices";

export const PrincipalContext = createContext();
export const PrincipalContextProvider = props => {
  //Loading State
  const [loading, setLoading] = useState(true);

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
      .then(review => {
        setListReviews(review);
        setFilterReviews(review);
      })
      .catch(e => {});
  }, [changeListReviews]);

  return (
    <PrincipalContext.Provider
      value={{
        loading,
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
        setFilterReviews
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};
