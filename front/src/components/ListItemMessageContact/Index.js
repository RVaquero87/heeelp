//React
import React, { useContext } from "react";

//Styles & AOS animation
import { Paragraphs, Button } from "../../styles/Index.styles";
import { BoxMessageContact } from "./styles/ItemsMessageContact.style";

//Images
import closeX from "../../../public/images/close.svg";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Functional & Services
import { deleteMessageContact } from "../../services/contactServices";

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
    setFormSendEmailView("true");
  };

  return (
    <BoxMessageContact data-aos="fade-up">
      <div className="data-intro">
        <Paragraphs blue>
          De: <span>{messageContact.username}</span>
        </Paragraphs>
        <Paragraphs blue>
          <span>
            {messageContact.createdAt.slice(8, 10)}/
            {messageContact.createdAt.slice(5, 7)}/
            {messageContact.createdAt.slice(0, 4)}
          </span>
          <span className="item-block">
            {messageContact.createdAt.slice(11, 16)}
          </span>
        </Paragraphs>
      </div>
      <Paragraphs blue>
        <span>{messageContact.title}</span>
      </Paragraphs>

      <Paragraphs className="message" blue>
        {messageContact.message}
      </Paragraphs>

      <div className="box-buttons">
        <Button
          value={[messageContact.username, messageContact.title]}
          onClick={(e) => sendDataSendEmail(e, e.target.value)}
        >
          Responder
        </Button>

        <Button
          className="delete"
          type="transparent-blue"
          value={messageContact._id}
          onClick={(e) => getIdMessageContactDelete(e, e.target.value)}
        >
          Eliminar
        </Button>
      </div>
    </BoxMessageContact>
  );
};
