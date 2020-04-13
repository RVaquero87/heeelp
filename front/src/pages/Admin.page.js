//React
import React, { useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  ContainDivDefault,
  H1,
  BoxImg,
  AdminPanelBox,
  Col2HeaderControlUser,
} from "../styles/Index.styles";

//Images
import peopleAdmin from "../../public/images/people-admin.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { AdminUsers } from "./admin/Admin-users";
import { AdminReviews } from "./admin/Admin-reviews";
import { AdminContact } from "./admin/Admin-contact";

export const AdminPanel = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Tabs Buttons
  const [tabsAdmin, setTabsAdmin] = useState("users");

  const getComponentAdmin = (e, value) => {
    e.preventDefault();
    setTabsAdmin(value);
  };

  return (
    <>
      <SectionBox bgColor="blueLight" justify="evenly" className="z1">
        <Col2HeaderControlUser className="contain" data-aos="fade-up">
          <ContentText>
            <H1>Control de usuarios</H1>
          </ContentText>
          <BoxImg>
            <img src={peopleAdmin} alt="heeelp!" title="heeelp!" />
          </BoxImg>
        </Col2HeaderControlUser>
      </SectionBox>

      <SectionBox justify="start">
        <AdminPanelBox className="contain" data-aos="fade-up">
          <div className="button-box">
            <button
              value="users"
              className={tabsAdmin === "users" ? "active" : ""}
              onClick={(e) => getComponentAdmin(e, e.target.value)}
            >
              <i className="fas fa-users" aria-hidden="true"></i>
              <span>Lista de </span>usuarios
            </button>
            <button
              value="messages"
              className={tabsAdmin === "messages" ? "active" : ""}
              onClick={(e) => getComponentAdmin(e, e.target.value)}
            >
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
              Mensajes<span> de contacto</span>
            </button>
            <button
              value="reviews"
              className={tabsAdmin === "reviews" ? "active" : ""}
              onClick={(e) => getComponentAdmin(e, e.target.value)}
            >
              <i className="fas fa-comments" aria-hidden="true"></i>
              <span>Lista de </span>opiniones
            </button>
          </div>
        </AdminPanelBox>
      </SectionBox>

      <SectionBox>
        <ContainDivDefault>
          <>
            {tabsAdmin === "users" && <AdminUsers data-aos="fade-up" />}
            {tabsAdmin === "messages" && <AdminContact data-aos="fade-up" />}
            {tabsAdmin === "reviews" && <AdminReviews data-aos="fade-up" />}
          </>
        </ContainDivDefault>
      </SectionBox>
    </>
  );
};

//Page Protected
export const AdminPage = withProtected(AdminPanel, { redirect: false });
