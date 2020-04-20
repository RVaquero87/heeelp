//React
import React from "react";

//Styles & AOS animation
import { BoxNotification } from "./styles/Notifications.style";

const ItemNotification = ({ notification }) => {
  const { message, creatorUserId, createdAt } = notification;

  //Time modify
  const today = new Date().getTime();
  const time = new Date(createdAt).getTime();
  const subtractionDate = (today - time) / 86400000;
  const timeHour = createdAt.slice(11, 16);
  const reverseTime = createdAt.slice(0, 10).split("-").reverse().join("/");

  return (
    <BoxNotification>
      <p>
        <span>
          {creatorUserId?.name} {creatorUserId?.lastname.slice(0, 1)}.
        </span>{" "}
        - {message}
      </p>
      <p className="special">
        {subtractionDate >= 1 ? `${reverseTime}` : `${timeHour}`}
      </p>
    </BoxNotification>
  );
};
export default ItemNotification;
