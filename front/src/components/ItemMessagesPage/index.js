//React
import React, { useContext, useEffect, useState } from "react";

//Styles & AOS animation
import { BoxImg, ParagraphTop } from "../../styles/Index.styles";
import { BoxMessagesPage } from "./styles/Messages.style";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Images
import preventDefault from "../../../public/images/default-profile.png";
import closeX from "../../../public/images/close.svg";

//Functional & Services
import { deleteMessages } from "../../services/messagesServices";

//Compoments
import BoxCreateMessage from "../../components/CreateMessages";

const ItemMessagesPage = ({ item }) => {
  const {
    setMessageError,
    changeMessages,
    setChangeMessages,
    messageViewForm,
    setMessageViewForm,
    changeViewMessagesTab,
  } = useContext(PrincipalContext);

  const {
    _id,
    message,
    creatorUserId,
    createdAt,
    aidRequestId,
    receptorUserId,
  } = item;

  //Time modify
  const today = new Date().getTime();
  const time = new Date(createdAt).getTime();
  const subtractionDate = (today - time) / 86400000;
  const timeHour = createdAt.slice(11, 16);
  const reverseTime = createdAt.slice(0, 10).split("-").reverse().join("/");

  const handleDeleteMessage = async (e, value) => {
    e.preventDefault();
    const responseServerDelete = await deleteMessages({ _id: value });
    setChangeMessages(!changeMessages);
    setMessageError(responseServerDelete.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <BoxMessagesPage>
      <p className="special">
        {subtractionDate >= 1 ? `${reverseTime}` : `${timeHour}`}
      </p>
      <div className="user">
        <BoxImg>
          {changeViewMessagesTab == true ? (
            <img
              src={
                (creatorUserId?.image && creatorUserId?.image) || preventDefault
              }
              alt={creatorUserId?.name}
              title={creatorUserId?.name}
            />
          ) : (
            <img
              src={
                (receptorUserId?.image && receptorUserId?.image) ||
                preventDefault
              }
              alt={receptorUserId?.name}
              title={receptorUserId?.name}
            />
          )}
        </BoxImg>
        {changeViewMessagesTab == true ? (
          <p>
            <span>
              {creatorUserId?.name} {creatorUserId?.lastname.slice(0, 1)}.
            </span>{" "}
          </p>
        ) : (
          <p>
            <span>
              {receptorUserId?.name} {receptorUserId?.lastname.slice(0, 1)}.
            </span>
          </p>
        )}
      </div>
      <div className="message">
        <p>{message}</p>
      </div>

      <button
        className="response"
        onClick={(e) => setMessageViewForm(!messageViewForm)}
      >
        Responder
      </button>

      <button
        className="delete"
        value={_id}
        onClick={(e) => handleDeleteMessage(e, e.target.value)}
      >
        borrar
      </button>

      {messageViewForm && (
        <div className="box-form">
          <ParagraphTop>
            {changeViewMessagesTab == true ? "Responder a" : "Escribir a"}
          </ParagraphTop>
          <div className="user">
            <BoxImg>
              {changeViewMessagesTab == true ? (
                <img
                  src={
                    (creatorUserId?.image && creatorUserId?.image) ||
                    preventDefault
                  }
                  alt={creatorUserId?.name}
                  title={creatorUserId?.name}
                />
              ) : (
                <img
                  src={
                    (receptorUserId?.image && receptorUserId?.image) ||
                    preventDefault
                  }
                  alt={receptorUserId?.name}
                  title={receptorUserId?.name}
                />
              )}
            </BoxImg>
            {changeViewMessagesTab == true ? (
              <p>
                <span>
                  {creatorUserId?.name} {creatorUserId?.lastname.slice(0, 1)}.
                </span>{" "}
              </p>
            ) : (
              <p>
                <span>
                  {receptorUserId?.name} {receptorUserId?.lastname.slice(0, 1)}.
                </span>
              </p>
            )}
          </div>

          <BoxCreateMessage
            receptorUserId={
              changeViewMessagesTab == true ? creatorUserId : receptorUserId
            }
            aidRequestId={aidRequestId}
          />
          <button onClick={(e) => setMessageViewForm(!messageViewForm)}>
            <img src={closeX} alt="cerrar" title="cerrar" />
          </button>
        </div>
      )}
    </BoxMessagesPage>
  );
};
export default ItemMessagesPage;
