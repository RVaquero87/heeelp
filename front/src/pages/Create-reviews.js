import React, { useContext, useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { InputBox } from "../components/Input/index";
import { TextAreaBox } from "../components/TextArea/index";
import { SelectBox } from "../components/Select/index";
import { createReview } from "../services/reviewsServices";
import { PrincipalContext } from "../context/PrincipalContext";

export const CreateReview = withRouter(({ history }) => {
  const { user, setMessageError } = useContext(PrincipalContext);

  //Form
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      message: "",
      stars: ""
    }
  });

  const { register, handleSubmit, errors } = methods;

  const getReviewsNew = async data => {
    const responseServer = await createReview(data);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(getReviewsNew)} data-aos="fade-up">
        <h1>Crear Review</h1>
        <InputBox
          label="Resumén tu valoración en una palabras"
          name="title"
          ref={register({
            required: {
              value: true,
              message: "Este campo es requerido"
            },
            maxLength: {
              value: 50,
              message: "Máximo 10 caracteres"
            }
          })}
        />
        <TextAreaBox
          label="Describe tu valoración"
          name="message"
          ref={register({
            required: {
              value: true,
              message: "Este campo es requerido"
            }
          })}
        />
        <SelectBox
          label="Puntuanos sobre 5"
          name="stars"
          value={[0, 1, 2, 3, 4, 5]}
          ref={register({
            required: {
              value: true,
              message: "Este campo es requerido"
            }
          })}
        />

        <button type="submit" className="button">
          Crear
        </button>
      </form>
    </FormContext>
  );
});
