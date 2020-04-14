//React
import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";

//Styles & AOS animation
import {
  LightBoxError,
  HeaderBox,
  Paragraphs,
  Button,
} from "../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { doLogout } from "../services/authServices";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";

export const Header = withRouter(({ history }) => {
  const { Body, user, setUser, messageError, setLightboxRegister } = useContext(
    PrincipalContext
  );

  const onClickLogout = async (e) => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  //Register lighboxRol and Active Body
  const onClickRegister = async (e) => {
    e.preventDefault();
    setHamburguerNav(false);
    Body[0].classList.add("active");
    setLightboxRegister(true);
    history.push("/registro");
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

  const buttonAdd = (e) => {
    e.preventDefault();
    hamburguerNav ? setHamburguerNav(false) : setHamburguerNav(true);
    if (Body[0].classList.contains("active")) {
      Body[0].classList.remove("active");
    } else {
      Body[0].classList.add("active");
    }
  };

  const navClick = document.querySelectorAll("#navbar .nav-link");

  for (let i = 0; i < navClick.length; i++) {
    navClick[i].onclick = function (e) {
      Body[0].classList.remove("active");
      setHamburguerNav(false);
    };
  }

  return (
    <HeaderBox id="navbar">
      <div className="contain">
        <div className="header-inner">
          <div className="logo">
            <>
              {(!user && (
                <Link to="/" className="nav-link">
                  heeelp
                </Link>
              )) ||
                (user?.rol == "Admin" && (
                  <Link to="/control-admin" className="nav-link">
                    heeelp
                  </Link>
                )) || (
                  <Link to="/home" className="nav-link">
                    heeelp
                  </Link>
                )}
            </>
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
                      >
                        faq's
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to="/reviews"
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
                      >
                        contacto
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="button-box">
                  <Button
                    type="blue"
                    id="button-register"
                    className="button"
                    onClick={(e) => onClickRegister(e)}
                  >
                    Regístrate
                  </Button>
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
              <>
                <nav>
                  <ul>
                    <>
                      {(user?.rol === "Admin" && (
                        <li>
                          <NavLink to="/control-admin" className="nav-link">
                            Control de Admin
                          </NavLink>
                        </li>
                      )) ||
                        (user?.rol === "Helpers" && (
                          <>
                            <li>
                              <NavLink to="/home" className="nav-link">
                                listado de peticiones
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/home" className="nav-link">
                                mis peticiones
                              </NavLink>
                            </li>
                          </>
                        )) || (
                          <>
                            <li>
                              <NavLink to="/home" className="nav-link">
                                mis peticiones
                              </NavLink>
                            </li>
                          </>
                        )}
                      <li>
                        <NavLink to="/reviews" className="nav-link">
                          opiniones
                        </NavLink>
                      </li>
                    </>
                  </ul>
                </nav>
                <div className="button-box">
                  <ButtonLink whereTo="/profile" className="nav-link">
                    Profile
                  </ButtonLink>
                  <ButtonLink whereTo="/profile" className="nav-link">
                    Mensajes
                  </ButtonLink>
                  <ButtonLink whereTo="/profile" className="nav-link">
                    Notificaciones
                  </ButtonLink>
                  <button
                    onClick={(e) => onClickLogout(e)}
                    className="nav-link"
                  >
                    Logout
                  </button>
                </div>
              </>
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
