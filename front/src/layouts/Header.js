//React
import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";

//Styles & AOS animation
import { LightBox, HeaderBox } from "../../public/styles/Common.styles";

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

  const buttonAdd = e => {
    e.preventDefault();
    hamburguerNav ? setHamburguerNav(false) : setHamburguerNav(true);
    const Body = document.getElementsByTagName("body");
    if (Body[0].classList.contains("active")) {
      Body[0].classList.remove("active");
    } else {
      Body[0].classList.add("active");
    }
  };

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
                      <NavLink activeClassName="active" to="/servicios-tarifas">
                        servicios y tarifas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/faqs">
                        faq's
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/reviews">
                        opiniones
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/contacto">
                        contacto
                      </NavLink>
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
                    <NavLink to="/private">Private Page</NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-review">Crear review</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" onClick={e => onClickLogout(e)}>
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
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin2">Admin Reviews</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {messageError && (
            <LightBox data-aos="fade-down">
              <p>{messageError}</p>
            </LightBox>
          )}

          <button
            id="hamburger"
            className={hamburguerNav ? "hamburger active" : "hamburger"}
            onClick={e => buttonAdd(e)}
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
