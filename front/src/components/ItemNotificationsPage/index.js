//React
import React, { useContext, useEffect, useState } from "react";

//Styles & AOS animation
import { FormBox, BoxImg, Paragraphs } from "../../styles/Index.styles";
import { BoxNotificationPage } from "./styles/Notifications.style";

//Images
import { Trash2, Save } from "react-feather";
import preventDefault from "../../../public/images/default-profile.png";

//Functional & Services
import { getYearsOld } from "../../lib/commonFunctional";
import { doUnsubscribe, doEditUserAdmin } from "../../services/authServices";

//Components

export const ItemNotificationsPage = ({ itemNotification }) => {
  //URL PAGE
  const [urlPage, seturlPage] = useState();

  // useEffect(() => {
  //   let url = window.location.href.split("/");
  //   let pageurl = url[url.length - 1];
  //   seturlPage(pageurl);
  // }, [window.location.href]);

  // const {} = itemNotification;
  // const deleteUser = async (e, value) => {
  //   e.preventDefault();
  //   const responseServerDelete = await doUnsubscribe({ _id: value });
  //   setchangeLisUsers(!changeLisUsers);
  //   setMessageError(responseServerDelete.message);
  //   setTimeout(() => {
  //     setMessageError(null);
  //   }, 5000);
  // };

  // //Change rol
  // const changeRol = async (data) => {
  //   const userChange = { ...data, _id: user._id };
  //   const responseServer = await doEditUserAdmin(userChange);
  //   setMessageError(responseServer.message);
  //   setTimeout(() => {
  //     setMessageError(null);
  //   }, 5000);
  // };

  return (
    <BoxNotificationPage>
      <p>hola</p>
      {urlPage == "mis-notificaciones" && (
        <button
          className="delete"
          value={notification._id}
          onClick={(e) => delete (e, e.target.value)}
        >
          <Trash2 color="#3e3874" />
        </button>
      )}
    </BoxNotificationPage>
  );
};
