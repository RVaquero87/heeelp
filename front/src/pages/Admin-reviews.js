import React, { useContext, useState, useEffect } from "react";
import { withProtected } from "../lib/protectRoute.hoc";
import { getAllReviews } from "../services/reviewsServices";
import { getAverage } from "../lib/commonFunctional";
import { PrincipalContext } from "../context/PrincipalContext";
import { Loading } from "../components/Loading/index";
import { ReviewsBoxItem } from "../components/ListItemReviews/index";

const AdminReviewsPage = () => {
  const { changeLisReviews } = useContext(PrincipalContext);

  const [listReviews, setListReviews] = useState();

  useEffect(() => {
    getAllReviews()
      .then(review => {
        setListReviews(review);
      })
      .catch(e => {});
  }, [changeLisReviews]);

  //set stado
  return (
    <>
      {!listReviews ? (
        <Loading />
      ) : (
        <>
          <p>
            Nota media de Reviews:{" "}
            {getAverage(listReviews.map(item => item.stars))}
          </p>
          <div data-aos="fade-up">
            {listReviews.map((review, i) => {
              return <ReviewsBoxItem review={review} key={i} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
export const AdminReviews = withProtected(AdminReviewsPage, {
  redirect: false
});
