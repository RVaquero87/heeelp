//React
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import { SectionBox } from "../styles/Index.styles";

//Images
import youngGirl from "../../public/images/young-girl.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";
import { getOneAidRequest } from "../services/aidRequestServices";

//Compoments
import { ItemServicies } from "../components/ItemServices/Index";
import { Loading } from "../components/Loading";

export const MyRequestDetailsRolPage = withRouter(({ history }) => {
  const { user } = useContext(PrincipalContext);
  const { id } = useParams();

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Get One ID AID REQUEST
  const [aidRequestOne, setAidRequestOne] = useState();
  const [aidRequestOneChange, setAidRequestOneChange] = useState();

  useEffect(() => {
    getOneAidRequest(id)
      .then((aidRequest) => {
        setAidRequestOne(aidRequest[0]);
      })
      .catch((e) => {});
  }, [aidRequestOneChange]);

  //ESTO ES PARA VILVER PAGINA ANTEIOR
  //history.goBack();

  return (
    <>
      {!aidRequestOne ? (
        <Loading />
      ) : (
        <>
          <button
            style={{ marginTop: "200px" }}
            className="button"
            onClick={(e) => history.goBack()}
          >
            Volver
          </button>
          <p>{aidRequestOne.price}</p>
        </>
      )}
    </>
  );
});

export const MyRequestDetailsRolPagePrivate = withProtected(
  MyRequestDetailsRolPage,
  {
    redirect: false,
  }
);
