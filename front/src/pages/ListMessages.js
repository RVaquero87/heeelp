//React
import React, { useContext, useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {
  SectionBox,
  SectionMessagesList,
  ContentText,
  H1,
  SectionHeaderSingleTitle,
  Paragraphs,
} from "../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import Loading  from "../components/Loading";
import ItemNotificationsPage  from "../components/ItemNotificationsPage";

export const ListNotificationsPage = () => {
  const { messagesReceived, messagesSend } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      {!messagesSend && !messagesReceived ! ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight">
            <SectionHeaderSingleTitle className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Notificaciones</H1>
              </ContentText>
            </SectionHeaderSingleTitle>
          </SectionBox>

          {/* <SectionBox justify="center" column>
            <SectionMessagesList
              className={
                notifications.length == 0
                  ? "contain list-notifications zero-notifications"
                  : "contain list-notifications"
              }
              data-aos="fade-up"
            >
              <div className="box-notifications">
                {notifications.length == 0 ? (
                  <Paragraphs blue>
                    <span>No tiene ninguna notificación en este momento.</span>
                  </Paragraphs>
                ) : (
                  notifications.map((itemNotification, i) => {
                    return (
                      <ItemNotificationsPage
                        notification={itemNotification}
                        key={i}
                      />
                    );
                  })
                )}
              </div>
            </SectionMessagesList>
          </SectionBox> */}
        </>
      )}
    </>
  );
};

export const ListNotificationsPagePrivate = withProtected(
  ListNotificationsPage,
  {
    redirect: false,
  }
);
