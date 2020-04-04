import React, { useContext, useState, useEffect } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";
import { deleteReviews } from "../../services/reviewsServices";
import { getYearsOld } from "../../lib/commonFunctional";

export const ReviewsBoxItem = ({ review }) => {
  const {
    user,
    setMessageError,
    changeListReviews,
    setchangeListReviews
  } = useContext(PrincipalContext);

  const deleteThisReview = async (e, value) => {
    e.preventDefault();
    const responseServerDelete = await deleteReviews({ _id: value });
    setchangeListReviews(!changeListReviews);
    setMessageError(responseServerDelete.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <div>
      <p>{review.title}</p>
      <p>{review.message}</p>
      <p>{review.stars}</p>
      <p>
        {review.creatorUserid.name} {review.creatorUserid.lastname}
      </p>
      <p>{getYearsOld(user?.birthYear)}</p>

      {user?.rol === "Admin" && (
        <button
          value={review._id}
          onClick={e => deleteThisReview(e, e.target.value)}
        >
          eliminar
        </button>
      )}
    </div>
  );
};
