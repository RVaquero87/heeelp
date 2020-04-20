//React
import React, { useContext, useEffect, useState } from "react";

//Styles & AOS animation
import { BoxImg } from "../../styles/Index.styles";
import { BoxNotificationPage } from "./styles/Notifications.style";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Images
import preventDefault from "../../../public/images/default-profile.png";

//Functional & Services
import { deleteNotifications } from "../../services/notificationsServices";

const ItemNotificationsPage = ({ notification }) => {
  const {
    setMessageError,
    changeNotifications,
    setChangeNotifications,
  } = useContext(PrincipalContext);

  const { _id, message, creatorUserId, createdAt } = notification;

  //Time modify
  const today = new Date().getTime();
  const time = new Date(createdAt).getTime();
  const subtractionDate = (today - time) / 86400000;
  const timeHour = createdAt.slice(11, 16);
  const reverseTime = createdAt.slice(0, 10).split("-").reverse().join("/");

  const deleteNotification = async (e, value) => {
    e.preventDefault();
    const responseServerDelete = await deleteNotifications({ _id: value });
    setChangeNotifications(!changeNotifications);
    setMessageError(responseServerDelete.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <BoxNotificationPage>
      <p className="special">
        {subtractionDate >= 1 ? `${reverseTime}` : `${timeHour}`}
      </p>
      <div className="user">
        <BoxImg>
          <img
            src={
              (creatorUserId?.image && creatorUserId?.image) || preventDefault
            }
            alt={creatorUserId?.name}
            title={creatorUserId?.name}
          />
        </BoxImg>
        <p>
          <span>
            {creatorUserId?.name} {creatorUserId?.lastname.slice(0, 1)}.
          </span>{" "}
          <span className="line">-</span> {message}
        </p>
      </div>
      <button
        className="delete"
        value={_id}
        onClick={(e) => deleteNotification(e, e.target.value)}
      >
        borrar
      </button>
    </BoxNotificationPage>
  );
};
export default ItemNotificationsPage;
