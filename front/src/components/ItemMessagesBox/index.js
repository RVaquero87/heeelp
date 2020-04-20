//React
import React from "react";

//Styles & AOS animation
import { BoxMessages } from "./styles/Messages.style";

export const ItemMessages = ({ message }) => {
  // const { message, creatorUserId, createdAt } = message;
  consolelog(message);
  //Time modify
  // const today = new Date().getTime();
  // const time = new Date(createdAt).getTime();
  // const subtractionDate = (today - time) / 86400000;
  // const timeHour = createdAt.slice(11, 16);
  // const reverseTime = createdAt.slice(0, 10).split("-").reverse().join("/");

  return (
    <BoxMessages>
      {/* <p>
        <span>
          {creatorUserId?.name} {creatorUserId?.lastname.slice(0, 1)}.
        </span>{" "}
        - {message}
      </p>
      <p className="special">
        {subtractionDate >= 1 ? `${reverseTime}` : `${timeHour}`}
      </p> */}
    </BoxMessages>
  );
};
