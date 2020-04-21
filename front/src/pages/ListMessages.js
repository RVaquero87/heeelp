//React
import React, { useContext, useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {
  SectionBox,
  SectionMessagesList,
  SectionTabsMessages,
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
import Loading from "../components/Loading";
import ItemMessagesPage from "../components/ItemMessagesPage";

export const ListMessagesPage = () => {
  const {
    messagesReceived,
    messagesSend,
    changeViewMessagesTab,
    setChangeViewMessagesTab,
    messageViewForm,
    setMessageViewForm,
  } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  const getMessageRecives = (e) => {
    e.preventDefault();
    setChangeViewMessagesTab(true);
    setMessageViewForm(false);
  };

  const getMessageSend = (e) => {
    e.preventDefault();
    setChangeViewMessagesTab(false);
    setMessageViewForm(false);
  };

  return (
    <>
      {!messagesSend && !messagesReceived ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight">
            <SectionHeaderSingleTitle className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Mensajes</H1>
              </ContentText>
            </SectionHeaderSingleTitle>
          </SectionBox>

          <SectionBox justify="start">
            <SectionTabsMessages className="contain">
              <button
                className={changeViewMessagesTab ? "active" : ""}
                onClick={(e) => getMessageRecives(e)}
              >
                Recibidos
              </button>
              <button
                className={!changeViewMessagesTab ? "active" : ""}
                onClick={(e) => getMessageSend(e)}
              >
                Enviados
              </button>
            </SectionTabsMessages>
          </SectionBox>

          {changeViewMessagesTab ? (
            <SectionBox justify="center" column>
              <SectionMessagesList
                className={
                  messagesReceived.length == 0
                    ? "contain list-messages zero-messages"
                    : "contain list-messages"
                }
              >
                <div className="box-messages">
                  {messagesReceived.length == 0 ? (
                    <Paragraphs blue>
                      <span>No ha recibido ningún mensaje por el momento.</span>
                    </Paragraphs>
                  ) : (
                    messagesReceived
                      .filter(
                        (messages) => messages.statusReceptor != "Borrado"
                      )
                      .map((messages, i) => {
                        return <ItemMessagesPage item={messages} key={i} />;
                      })
                  )}
                </div>
              </SectionMessagesList>
            </SectionBox>
          ) : (
            <SectionBox justify="center" column>
              <SectionMessagesList
                className={
                  messagesSend.length == 0
                    ? "contain list-messages zero-messages"
                    : "contain list-messages"
                }
              >
                <div className="box-messages">
                  {messagesSend.length == 0 ? (
                    <Paragraphs blue>
                      <span>No has enviado ningún mensaje por el momento.</span>
                    </Paragraphs>
                  ) : (
                    messagesSend
                      .filter((messages) => messages.statusCreator != "Borrado")
                      .map((messages, i) => {
                        return <ItemMessagesPage item={messages} key={i} />;
                      })
                  )}
                </div>
              </SectionMessagesList>
            </SectionBox>
          )}
        </>
      )}
    </>
  );
};

export const ListMessagesPagePrivate = withProtected(ListMessagesPage, {
  redirect: false,
});
