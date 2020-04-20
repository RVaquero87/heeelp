//React
import React, { useContext } from "react";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import { FormBox, Button } from "../../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { sendMessage } from "../../services/messagesServices";

//Compoments
import { TextAreaBox } from "../TextArea";

export const BoxCreateMessage = ({ receptorUserId, aidRequestId }) => {
  const {
    setMessageError,
    changeMessages,
    setChangeMessages,
    messageViewForm,
    setMessageViewForm,
  } = useContext(PrincipalContext);

  //Create Message
  const createItem = async (data) => {
    const createData = { receptorUserId, aidRequestId, ...data };
    const responseServer = await sendMessage(createData);
    setChangeMessages(!changeMessages);
    setMessageError(responseServer.message);
    setMessageViewForm(!messageViewForm);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //FORM
  const methods = useForm({
    mode: "onBlur",
  });

  const { register, handleSubmit, errors } = methods;

  return (
    <FormContext {...methods}>
      <FormBox onSubmit={handleSubmit(createItem)}>
        <TextAreaBox
          name="message"
          classNameDiv="border"
          ref={register({
            required: {
              value: true,
              message: "El campo es requerido",
            },
          })}
        />

        <Button type="submit" type=" transparent-blue">
          Enviar
        </Button>
      </FormBox>
    </FormContext>
  );
};
