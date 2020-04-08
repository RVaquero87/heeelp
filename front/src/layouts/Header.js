//React
import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";

//Styles & AOS animation
import {
  LightBoxError,
  HeaderBox,
  Paragraphs,
} from "../../public/styles/Common.styles";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doLogout } from "../services/authServices";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const Header = withRouter(({ history }) => {
  const { user, setUser, messageError } = useContext(PrincipalContext);

  const onClickLogout = async (e) => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  //Nav Scroll Change
  window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    if (window.scrollY <= 50) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  };

  //Hamburguer Nav
  const [hamburguerNav, setHamburguerNav] = useState(false);

  const Body = document.getElementsByTagName("body");

  const buttonAdd = (e) => {
    e.preventDefault();
    hamburguerNav ? setHamburguerNav(false) : setHamburguerNav(true);
    if (Body[0].classList.contains("active")) {
      Body[0].classList.remove("active");
    } else {
      Body[0].classList.add("active");
    }
  };

  const navClick = document.querySelectorAll("#nav-resp .nav-link");

  for (let i = 0; i < navClick.length; i++) {
    navClick[i].onclick = function (e) {
      if (screen.width <= 960) {
        Body[0].classList.remove("active");
        setHamburguerNav(false);
      }
    };
  }

  return (
    <HeaderBox id="navbar">
      <div className="contain">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">heeelp</Link>
          </div>
          <div
            id="nav-resp"
            className={hamburguerNav ? "box-nav active" : "box-nav"}
          >
            {!user && (
              <>
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/servicios-tarifas"
                        className="nav-link"
                      >
                        servicios y tarifas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/faqs"
                        className="nav-link"
                        className="nav-link"
                      >
                        faq's
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/reviews"
                        className="nav-link"
                        className="nav-link"
                      >
                        opiniones
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/contacto"
                        className="nav-link"
                        className="nav-link"
                      >
                        contacto
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="button-box">
                  <ButtonLink whereTo="/registro" className="button nav-link">
                    Regístrate
                  </ButtonLink>
                  <ButtonLink
                    whereTo="/login"
                    className="button transparent nav-link"
                  >
                    Inicia sesión
                  </ButtonLink>
                </div>
              </>
            )}
            {user && (
              <nav>
                <ul>
                  <li>
                    <NavLink to="/private" className="nav-link">
                      Private Page
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" className="nav-link">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-review" className="nav-link">
                      Crear review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={(e) => onClickLogout(e)}
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
            {user?.rol === "Admin" && (
              <nav>
                <ul>
                  <li>
                    <NavLink to="/admin" className="nav-link">
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin2" className="nav-link">
                      Admin Reviews
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {messageError && (
            <LightBoxError>
              <Paragraphs>{messageError}</Paragraphs>
            </LightBoxError>
          )}

          <button
            id="hamburger"
            className={hamburguerNav ? "hamburger active" : "hamburger"}
            onClick={(e) => buttonAdd(e)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>
    </HeaderBox>
  );
});
