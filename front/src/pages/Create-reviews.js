import React, { useContext, useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { InputBox } from "../components/Input/index";
import { TextAreaBox } from "../components/TextArea/index";
import { SelectBox } from "../components/Select/index";
import { createReview, getIDReview } from "../services/reviewsServices";
import { PrincipalContext } from "../context/PrincipalContext";
import { Loading } from "../components/Loading/index";
import { getAverage } from "../lib/commonFunctional";

import { ReviewsBoxItem } from "../components/ListItemReviews/index";

export const CreateReview = withRouter(({ history }) => {
  const {
    user,
    setMessageError,
    changeListReviews,
    setchangeListReviews,
  } = useContext(PrincipalContext);

  const [listIDReviews, setListIDReviews] = useState();
  const [getFormReviews, setGetFormReviews] = useState();

  //Print All Reviews

  useEffect(() => {
    getIDReview(user)
      .then((review) => {
        setListIDReviews(review);
      })
      .catch((e) => {});
  }, [changeListReviews, user]);

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      message: "",
      stars: "",
    },
  });

  const { register, handleSubmit, errors } = methods;

  const getReviewsNew = async (data) => {
    const responseServer = await createReview(data);
    setGetFormReviews(!getFormReviews);
    setchangeListReviews(!changeListReviews);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <>
      {!listIDReviews ? (
        <Loading />
      ) : (
        <>
          <button onClick={() => setGetFormReviews(!getFormReviews)}>
            {getFormReviews ? " Ocular form" : "Crear Review"}
          </button>
          {getFormReviews && (
            <FormContext {...methods}>
              <form onSubmit={handleSubmit(getReviewsNew)} data-aos="fade-up">
                <h1>Crear Review</h1>
                <InputBox
                  label="Resumén tu valoración en una palabras"
                  name="title"
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    maxLength: {
                      value: 40,
                      message:
                        "Este campo solo admite un máximo de 40 caracteres",
                    },
                  })}
                />
                <TextAreaBox
                  label="Describe tu valoración"
                  name="message"
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                <SelectBox
                  label="Puntuanos sobre 5"
                  name="stars"
                  value={[0, 1, 2, 3, 4, 5]}
                  ref={register({
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />

                <button type="submit" className="button">
                  Crear
                </button>
              </form>
            </FormContext>
          )}

          <p>
            Nota media de tus Reviews:
            {getAverage(listIDReviews.map((item) => item.stars))}
          </p>
          <div data-aos="fade-up">
            {listIDReviews.map((review, i) => {
              return <ReviewsBoxItem review={review} key={i} />;
            })}
          </div>
        </>
      )}
    </>
  );
});
