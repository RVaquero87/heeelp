//React
import React, { useContext } from "react";

//Styles & AOS animation
import { Paragraphs } from "../../../public/styles/Common.styles";
import { BoxMessageContact } from "./styles/ItemsMessageContact.style";

//Images
import closeX from "../../../public/images/close.svg";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { deleteMessageContact } from "../../services/contactServices";

//Components

export const MessageBoxItem = ({ messageContact }) => {
  const {
    setMessageError,
    setResponseMessageContact,
    listMessageContactChange,
    setListMessageContactChange,
    setFormSendEmailView,
    formSendEmailView,
  } = useContext(PrincipalContext);

  const getIdMessageContactDelete = async (e, value) => {
    e.preventDefault();
    const responseServerDelete = await deleteMessageContact({ _id: value });
    setListMessageContactChange(!listMessageContactChange);
    setMessageError(responseServerDelete.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  const sendDataSendEmail = (e, value) => {
    e.preventDefault();
    const dataEmail = value.split(",");
    setResponseMessageContact({
      username: dataEmail[0],
      title: dataEmail[1],
    });
    setFormSendEmailView(!formSendEmailView);
  };

  return (
    <BoxMessageContact data-aos="fade-up">
      <Paragraphs blue>
        <span>{messageContact.username}</span>
      </Paragraphs>
      <Paragraphs blue>{messageContact.title}</Paragraphs>

      <Paragraphs blue>
        <span>{messageContact.message}</span>
      </Paragraphs>
      <Paragraphs blue>
        {messageContact.createdAt.slice(11, 16)} -
        <span>
          {messageContact.createdAt.slice(8, 10)}/
          {messageContact.createdAt.slice(5, 7)}/
          {messageContact.createdAt.slice(0, 4)}
        </span>
      </Paragraphs>

      <button
        className="delete"
        value={messageContact._id}
        onClick={(e) => getIdMessageContactDelete(e, e.target.value)}
      >
        <img src={closeX} alt="ELIMINAR" title="ELIMINAR" />
      </button>

      <button
        className="response button"
        value={[messageContact.username, messageContact.title]}
        onClick={(e) => sendDataSendEmail(e, e.target.value)}
      >
        Responder
      </button>
    </BoxMessageContact>
  );
};
