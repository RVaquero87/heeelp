import React, { useContext, useState, useEffect } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";
import { deleteReviews } from "../../services/reviewsServices";

export const ReviewsBoxItem = ({ review }) => {
  const { setMessageError, changeLisReviews, setchangeLisReviews } = useContext(
    PrincipalContext
  );

  const deleteThisReview = async (e, value) => {
    e.preventDefault();
    const responseServerDelete = await deleteReviews({ _id: value });
    setchangeLisReviews(!changeLisReviews);
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

      <button
        value={review._id}
        onClick={e => deleteThisReview(e, e.target.value)}
      >
        eliminar
      </button>
    </div>
  );
};
