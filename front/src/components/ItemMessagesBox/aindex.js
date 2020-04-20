//React
import React from "react";

//Styles & AOS animation
import { BoxMessages } from "./styles/Messages.style";

//Functional & Services
import { getYearsOld } from "../../lib/commonFunctional";

const ItemMessages = ({ messageItem }) => {
  const { message, creatorUserId, createdAt } = messageItem;

  //Time modify
  const today = new Date().getTime();
  const time = new Date(createdAt).getTime();
  const subtractionDate = (today - time) / 86400000;
  const timeHour = createdAt.slice(11, 16);
  const reverseTime = createdAt.slice(0, 10).split("-").reverse().join("/");

  return (
    <BoxMessages>
      <div className="data">
        <p>
          <span>
            {creatorUserId?.name} {creatorUserId?.lastname.slice(0, 1)}.
          </span>{" "}
          <span className="line">
            - {getYearsOld(creatorUserId?.birthYear)} años
          </span>
        </p>
        <p className="special">
          {subtractionDate >= 1 ? `${reverseTime}` : `${timeHour}`}
        </p>
      </div>
      <p>{message.slice(0, 44)}...</p>
    </BoxMessages>
  );
};
export default ItemMessages;
