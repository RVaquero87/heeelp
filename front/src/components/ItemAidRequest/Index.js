//React
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Styles & AOS animation
import { BoxImg, ParagraphTop, Paragraphs } from "../../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";
import { BoxAidRequest } from "./styles/ItemsAidsRequest.style";

//Images
import icon1 from "../../../public/images/icon-1.svg";
import icon2 from "../../../public/images/icon-2.svg";
import icon3 from "../../../public/images/icon-3.svg";
import icon4 from "../../../public/images/icon-4.svg";
import icon5 from "../../../public/images/icon-5.svg";
import imgProfile from "../../../public/images/default-profile.png";

//Functional & Services
import {
  getPublicAidRequest,
  getDuplicateAidRequest,
  getCancelAidRequest,
} from "../../services/aidRequestServices";
import { getYearsOld } from "../../lib/commonFunctional";

export const AidsRequestBox = ({ aidrequest }) => {
  const { user, changeAidsRequest, setChangeAidsRequest } = useContext(
    PrincipalContext
  );

  const {
    _id,
    title,
    creatorUserid,
    helperId,
    price,
    time,
    type,
    status,
  } = aidrequest;

  //URL PAGE

  const [urlPage, seturlPage] = useState();

  useEffect(() => {
    let url = window.location.href.split("/");
    let pageurl = url[url.length - 1];
    seturlPage(pageurl);
  }, [window.location.href]);

  //Date SHORT
  const dateShort = time?.slice(0, 10);

  //Public Aids Request
  const publicAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await getPublicAidRequest(_id);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //Duplicate Aids Request
  const duplicateAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await getDuplicateAidRequest({ _id, title, time });
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  //Cancel Aids Request
  const cancelAidRequest = async (e) => {
    e.preventDefault();
    const responseServer = await getCancelAidRequest(_id);
    setChangeAidsRequest(!changeAidsRequest);
    setMessageError(responseServer.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };

  return (
    <BoxAidRequest data-aos="fade-up">
      <Link
        to={`/mi-peticion/${_id}`}
        className={status == "Cancelada" ? "card disabled" : "card"}
      >
        <div className="box-info">
          <p>{dateShort}</p>
          <p>{price}</p>
        </div>
        <div className="box-type">
          <BoxImg>
            <img
              src={(() => {
                switch (type) {
                  case "Supermercado":
                    return icon2;
                  case "Parafarmacia":
                    return icon3;
                  case "Tareas domésticas":
                    return icon4;
                  case "Animales domésticos":
                    return icon5;
                  default:
                    return icon1;
                }
              })()}
              title={type}
              alt={type}
            />
          </BoxImg>
          <Paragraphs blue>
            <span>{type}</span>
          </Paragraphs>
          <p className="content">{title}</p>
        </div>
        <div className="box-user">
          <div className="user">
            <BoxImg>
              {user?.rol == "Helped" ? (
                <img
                  src={helperId?.image || imgProfile}
                  title={helperId?.name || "foto perfil"}
                  alt={helperId?.name || "foto perfil"}
                />
              ) : (
                <img
                  src={creatorUserid?.image}
                  title={creatorUserid?.name}
                  alt={creatorUserid?.name}
                />
              )}
            </BoxImg>
            <div>
              {user?.rol == "Helped" ? (
                <>
                  <p className={helperId ? "" : "no-helper"}>
                    {`${helperId?.name} ${helperId?.lastname}` || ""}
                  </p>
                  <p className={helperId ? "" : "no-helper"}>
                    {getYearsOld(helperId?.birthYear) || ""}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {creatorUserid?.name} {creatorUserid?.lastname}
                  </p>
                  <p>{getYearsOld(creatorUserid?.birthYear)}</p>
                </>
              )}
            </div>
          </div>
          <div
            className={(() => {
              switch (status) {
                case "Publicada":
                  return "status blue";
                case "En curso":
                  return "status orange";
                case "Realizada":
                  return "status green";
                case "Cancelada":
                  return "status grey";
                default:
                  return "status";
              }
            })()}
          >
            {status}
          </div>

          {user.rol == "Helpers" &&
            status == "Publicada" &&
            urlPage == "listado-de-peticiones" && <button>opciones</button>}
          {user.rol == "Helpers" &&
            status == "En curso" &&
            urlPage == "listado-de-peticiones" && <button>opacion2</button>}
        </div>
      </Link>
      {user?.rol == "Helped" && (
        <>
          <button>opciones</button>
          <div className="button-box">
            <a onClick={(e) => publicAidRequest(e)}>Publicar</a>
            <Link to={`/mi-peticion/${_id}`}>Ver</Link>
            <a onClick={(e) => duplicateAidRequest(e)}>Duplicar</a>
            <a onClick={(e) => cancelAidRequest(e)}>Cancelar</a>
          </div>
        </>
      )}
    </BoxAidRequest>
  );
};
