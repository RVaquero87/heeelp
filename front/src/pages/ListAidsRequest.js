//React
import React, { useContext, useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Form
import { useForm, FormContext } from "react-hook-form";

//Styles & AOS animation
import {
  SectionBox,
  ContentText,
  BoxImg,
  H1,
  H2,
  Col2HeaderHomeRol,
  Paragraphs,
  SectionAidsRequest,
} from "../styles/Index.styles";

//Images
import youngGirl from "../../public/images/young-girl.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { AidsRequestBox } from "../components/ItemAidRequest/Index";

export const ListAidsRequestPage = () => {
  const {
    user,
    aidsRequest,
    aidsRequestId,
    changeAidsRequest,
    setChangeAidsRequest,
  } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Tab Form Aid Request
  const [filterAidsRequest, setFilterAidsRequest] = useState([]);

  return (
    <>
      {!aidsRequest ? (
        <Loading />
      ) : (
        <>
          <SectionBox bgColor="blueLight" justify="evenly" className="z1">
            <Col2HeaderHomeRol className="contain" data-aos="fade-up">
              <ContentText>
                <H1>Listado de peticiones</H1>
              </ContentText>
              <BoxImg className="helper">
                <img src={youngGirl} alt="heeelp!" title="heeelp!" />
              </BoxImg>
            </Col2HeaderHomeRol>
          </SectionBox>

          <SectionBox justify="center" column>
            <SectionAidsRequest
              className={
                aidsRequest.filter(
                  (aids) =>
                    aids.status == "Publicada" ||
                    (aids.status == "En curso" &&
                      aids.helperId?._id == user?._id)
                ).length == 0
                  ? "contain zero-aids"
                  : "contain"
              }
              data-aos="fade-up"
            >
              <div className="box-aids">
                {aidsRequest.filter(
                  (aids) =>
                    aids.status == "Publicada" ||
                    (aids.status == "En curso" &&
                      aids.helperId?._id == user?._id)
                ).length == 0 ? (
                  <Paragraphs blue>
                    <span>
                      No existe ninguna publicada en estos momentos con esos
                      requisitos.
                    </span>
                  </Paragraphs>
                ) : (
                  aidsRequest
                    .filter(
                      (aids) =>
                        aids.status == "Publicada" ||
                        (aids.status == "En curso" &&
                          aids.helperId._id == user._id)
                    )
                    .map((aids, i) => {
                      return <AidsRequestBox aidrequest={aids} key={i} />;
                    })
                )}
              </div>
            </SectionAidsRequest>
          </SectionBox>
        </>
      )}
    </>
  );
};

export const ListAidsRequestPagePrivate = withProtected(ListAidsRequestPage, {
  redirect: false,
});
