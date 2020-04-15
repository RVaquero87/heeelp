//React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Styles & AOS animation
import { BoxImg, ParagraphTop, Paragraphs } from "../../styles/Index.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";
import { BoxAidRequest } from "./styles/ItemsAidsRequest.style";

//Images
import startOn from "../../../public/images/star-on.svg";
import startOff from "../../../public/images/star-off.svg";

//Functional & Services
import { deleteReviews } from "../../services/reviewsServices";
import { getYearsOld } from "../../lib/commonFunctional";

export const AidsRequestBox = ({ aidrequest }) => {
  const { changeAidsRequest, setChangeAidsRequest } = useContext(
    PrincipalContext
  );

  return (
    <BoxAidRequest data-aos="fade-up">
      <Link to={`/mi-peticion/${aidrequest._id}`}>
        <p>{aidrequest?.title}</p>
      </Link>
    </BoxAidRequest>
  );
};
