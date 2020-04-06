//React
import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

//Styles & AOS animation
import {
  LightBox,
  HeaderBox,
  ContainDivDefault,
  BoxImg
} from "../../public/styles/Common.styles";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doLogout } from "../services/authServices";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const Header = withRouter(({ history }) => {
  const { user, setUser, messageError } = useContext(PrincipalContext);
  const onClickLogout = async e => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    if (window.scrollY <= 50) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  };

  return (
    <HeaderBox id="navbar">
      <ContainDivDefault>
        <h1>
          <Link to="/">heeelp</Link>
        </h1>
        <>
          {!user && (
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/servicios-tarifas">servicios y tarifas</Link>
                  </li>
                  <li>
                    <Link to="/faqs">faq's</Link>
                  </li>
                  <li>
                    <Link to="/faqs">contacto</Link>
                  </li>
                </ul>
              </nav>
              <div className="button-box">
                <ButtonLink whereTo="/registro" className="button">
                  Resgístrate
                </ButtonLink>
                <ButtonLink whereTo="/login" className="button white">
                  Inicia sesión
                </ButtonLink>
              </div>
            </>
          )}
          {user && (
            <nav>
              <ul>
                <li>
                  <Link to="/private">Private Page</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/create-review">Crear review</Link>
                </li>
                <li>
                  <Link to="/" onClick={e => onClickLogout(e)}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          {user?.rol === "Admin" && (
            <nav>
              <ul>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <Link to="/admin2">Admin Reviews</Link>
                </li>
              </ul>
            </nav>
          )}
        </>

        {messageError && (
          <LightBox data-aos="fade-down">
            <p>{messageError}</p>
          </LightBox>
        )}
      </ContainDivDefault>
    </HeaderBox>
  );
});
