import React, { useContext, useState, useEffect } from "react";
import { withProtected } from "../lib/protectRoute.hoc";
import { getAverage } from "../lib/commonFunctional";
import { PrincipalContext } from "../context/PrincipalContext";
import { Loading } from "../components/Loading/index";
import { ReviewsBoxItem } from "../components/ListItemReviews/index";

const AdminReviewsPage = () => {
  const {
    changeListReviews,
    setchangeListReviews,
    listReviews,
    filterReviews,
    setFilterReviews
  } = useContext(PrincipalContext);

  //Filter stars
  const handleFilterReviews = async (e, value) => {
    e.preventDefault();
    let filter = await listReviews.filter(item => {
      return item.stars == value;
    });
    setFilterReviews(filter);
    if (value === "all") {
      setchangeListReviews(!changeListReviews);
    }
  };

  return (
    <>
      {!filterReviews ? (
        <Loading />
      ) : (
        <>
          <p>Filtro</p>
          <select onChange={e => handleFilterReviews(e, e.target.value)}>
            <option value="all">Todos</option>
            <option value="0">0 Estrellas</option>
            <option value="1">1 Estrellas</option>
            <option value="2">2 Estrellas</option>
            <option value="3">3 Estrellas</option>
            <option value="4">4 Estrellas</option>
            <option value="5">5 Estrellas</option>
          </select>
          {filterReviews.length === 0 ? (
            <p>No existen nínguna con ese filtro</p>
          ) : (
            <>
              <p>
                Nota media de Reviews Total:{" "}
                {getAverage(listReviews.map(item => item.stars))}
              </p>
              <div data-aos="fade-up">
                {filterReviews.map((review, i) => {
                  return <ReviewsBoxItem review={review} key={i} />;
                })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export const AdminReviews = withProtected(AdminReviewsPage, {
  redirect: false
});
