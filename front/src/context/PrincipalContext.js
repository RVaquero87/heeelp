//React
import React, { createContext, useState, useEffect } from "react";

//Contexto
export const PrincipalContext = createContext();

//Functional & Services
import { whoUser } from "../services/authServices";
import { getAllReviews, getIDReview } from "../services/reviewsServices";
import {
  getAidRequest,
  getAidRequestCreator,
  getAidRequestHelper,
} from "../services/aidRequestServices";
import { getAverage } from "../lib/commonFunctional";
import { getMyReceivedNotifications } from "../services/notificationsServices";
import {
  getReceivedMessages,
  getSendMessages,
} from "../services/messagesServices";

export const PrincipalContextProvider = (props) => {
  //Loading State
  const [loading, setLoading] = useState(true);

  //Body Tag
  const Body = document.getElementsByTagName("body");

  //Users Active
  const [user, setUser] = useState();
  const [changeUser, setChangeUser] = useState(false);

  useEffect(() => {
    if (user) {
      whoUser().then((user) => {
        setUser(user);
      });
    }
  }, [changeUser]);

  //Users List CHange
  const [changeLisUsers, setchangeLisUsers] = useState(false);

  //Message Error Global Form
  const [messageError, setMessageError] = useState();

  //Reviews List CHange
  const [changeListReviews, setchangeListReviews] = useState(false);
  const [listReviews, setListReviews] = useState();
  const [listIDReviews, setListIDReviews] = useState();
  const [filterReviews, setFilterReviews] = useState();
  const [averageReviews, setAverageReviews] = useState();

  useEffect(() => {
    getAllReviews()
      .then((review) => {
        const averageReview = getAverage(review.map((item) => item.stars));
        setAverageReviews(averageReview);
        setListReviews(review);
        setFilterReviews(review);
      })
      .catch((e) => {});
    if (user) {
      getIDReview(user)
        .then((review) => {
          setListIDReviews(review);
        })
        .catch((e) => {});
    }
  }, [changeListReviews, user]);

  //List Contact Message Change
  const [listMessageContactChange, setListMessageContactChange] = useState();

  //Response Message Contact
  const [responseMessageContact, setResponseMessageContact] = useState();
  const [formSendEmailView, setFormSendEmailView] = useState("false");

  //Register Lightbox
  const [lightboxRegister, setLightboxRegister] = useState(true);

  //AidsRequest
  const [aidsRequest, setAidsRequest] = useState([]);
  const [aidsRequestId, setAidsRequestid] = useState([]);
  const [changeAidsRequest, setChangeAidsRequest] = useState();
  const [changeFilterAidsRequest, setchangeFilterAidsRequest] = useState();
  const [aidRequestOneChange, setAidRequestOneChange] = useState();

  useEffect(() => {
    if (user?.rol === "Helpers") {
      getAidRequestHelper()
        .then((aidsRequest) => {
          setAidsRequestid(aidsRequest);
        })
        .catch((e) => {});
    }
    if (user?.rol === "Helped") {
      getAidRequestCreator()
        .then((aidsRequest) => {
          setAidsRequestid(aidsRequest);
        })
        .catch((e) => {});
    }
    getAidRequest()
      .then((aidsRequest) => {
        setAidsRequest(aidsRequest);
      })
      .catch((e) => {});
  }, [changeAidsRequest, user]);

  //View Form Create List Item in AidRequest Details
  const [listItemViewForm, setListItemViewForm] = useState(false);

  //Notifications
  const [notifications, setNotifications] = useState([]);
  const [notificationsNews, setNotificationsNews] = useState([]);
  const [changeNotifications, setChangeNotifications] = useState();

  useEffect(() => {
    getMyReceivedNotifications()
      .then((notification) => {
        setNotifications(notification);
        const filterNew = notification.filter((item) => item.status == "Nuevo");
        setNotificationsNews(filterNew);
      })
      .catch((e) => {});
  }, [changeNotifications, user]);

  //Messages
  const [messagesNews, setMessagesNews] = useState([]);
  const [messagesReceived, setMessageReceived] = useState([]);
  const [messagesSend, setMessageSend] = useState([]);
  const [changeMessages, setChangeMessages] = useState();
  const [messageViewForm, setMessageViewForm] = useState(false);
  const [changeViewMessagesTab, setChangeViewMessagesTab] = useState(true);

  useEffect(() => {
    getReceivedMessages()
      .then((message) => {
        setMessageReceived(message);
        const filterNew = message.filter(
          (item) => item.statusReceptor == "Nuevo"
        );
        setMessagesNews(filterNew);
      })
      .catch((e) => {});
    getSendMessages()
      .then((message) => {
        setMessageSend(message);
      })
      .catch((e) => {});
  }, [changeMessages, user]);

  return (
    <PrincipalContext.Provider
      value={{
        //Loading State
        loading,
        setLoading,

        //Body Tag
        Body,

        //Users Active
        user,
        setUser,
        changeUser,
        setChangeUser,

        //Users List CHange
        changeLisUsers,
        setchangeLisUsers,

        //Message Error Global Form
        messageError,
        setMessageError,

        //Reviews List CHange

        changeListReviews,
        setchangeListReviews,
        listReviews,
        setListReviews,
        listIDReviews,
        setListIDReviews,
        filterReviews,
        setFilterReviews,
        averageReviews,
        setAverageReviews,

        //List Contact Message Change
        listMessageContactChange,
        setListMessageContactChange,

        //Response Message Contact
        responseMessageContact,
        setResponseMessageContact,
        formSendEmailView,
        setFormSendEmailView,

        //Register Lightbox
        lightboxRegister,
        setLightboxRegister,

        //AidsRequest
        aidsRequest,
        setAidsRequest,
        aidsRequestId,
        changeAidsRequest,
        setChangeAidsRequest,
        setAidsRequestid,
        changeFilterAidsRequest,
        setchangeFilterAidsRequest,
        aidRequestOneChange,
        setAidRequestOneChange,
        listItemViewForm,
        setListItemViewForm,

        //Notifications
        notifications,
        setNotifications,
        notificationsNews,
        setNotificationsNews,
        changeNotifications,
        setChangeNotifications,

        //Messages
        messagesNews,
        setMessagesNews,
        messagesReceived,
        setMessageReceived,
        messagesSend,
        setMessageSend,
        changeMessages,
        setChangeMessages,
        messageViewForm,
        setMessageViewForm,
        changeViewMessagesTab,
        setChangeViewMessagesTab,
      }}
    >
      {props.children}
    </PrincipalContext.Provider>
  );
};
