//React
import React, { useContext } from "react";

//Styles & AOS animation
import {
  SectionBox,
  Paragraphs,
  SectionReviewsAdmin,
  FilterStars,
} from "../../../public/styles/Common.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { getAverage } from "../../lib/commonFunctional";

//Compoments
import { ReviewsBoxItem } from "../../components/ListItemReviews/Index";
import { Loading } from "../../components/Loading/index";

export const AdminContact = () => {
  const {
    changeListReviews,
    setchangeListReviews,
    listReviews,
    filterReviews,
    setFilterReviews,
  } = useContext(PrincipalContext);

  //Filter stars
  const handleFilterReviews = async (e, value) => {
    e.preventDefault();
    let filter = await listReviews.filter((item) => {
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
          <SectionBox column>
            <SectionReviewsAdmin className="contain">
              <div className="box-faqs">
                <FilterStars data-aos="fade-up">
                  <Paragraphs blue>
                    <span>Filtra por el número de Estrellas:</span>
                  </Paragraphs>
                  <div className="box-filter">
                    <select
                      onChange={(e) => handleFilterReviews(e, e.target.value)}
                    >
                      <option value="all">Todas las opiniones</option>
                      <option value="0">0 Estrellas</option>
                      <option value="1">1 Estrellas</option>
                      <option value="2">2 Estrellas</option>
                      <option value="3">3 Estrellas</option>
                      <option value="4">4 Estrellas</option>
                      <option value="5">5 Estrellas</option>
                    </select>
                  </div>
                </FilterStars>
                <div className="box-reviews">
                  {filterReviews.length === 0 ? (
                    <Paragraphs blue>
                      No existe ninguna opinión con ese número de estrellas.
                    </Paragraphs>
                  ) : (
                    <>
                      {filterReviews &&
                        filterReviews
                          .sort((a, b) => b.stars - a.stars)
                          .map((review, i) => {
                            return <ReviewsBoxItem review={review} key={i} />;
                          })}
                    </>
                  )}
                </div>
              </div>
            </SectionReviewsAdmin>
          </SectionBox>
        </>
      )}
    </>
  );
};
