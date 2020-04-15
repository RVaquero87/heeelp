//React
import React, { useContext, useEffect } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {
  SectionBox,
  SectionServicesProvided,
  H1,
  H2,
  ParagraphTop,
  Paragraphs,
} from "../styles/Index.styles";

//Images
import icon1 from "../../public/images/icon-1.svg";
import icon2 from "../../public/images/icon-2.svg";
import icon3 from "../../public/images/icon-3.svg";
import icon4 from "../../public/images/icon-4.svg";
import icon5 from "../../public/images/icon-5.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ItemServicies } from "../components/ItemServices/Index";

export const HomeRolPage = () => {
  const { aidsRequestId } = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Function AidsRequestId Type Lenght
  const lenghtAidsRequestType = (typeAidRequest) => {
    const result = aidsRequestId.filter((item) => item.type == typeAidRequest)
      .length;
    return result;
  };

  return (
    <>
      <SectionBox justify="center" column bgColor="grey">
        <SectionServicesProvided className="contain" data-aos="fade-up">
          <H2 color="black">Total de servicios prestados</H2>
          <ParagraphTop className="total-services">
            {aidsRequestId.length}
          </ParagraphTop>

          <div className="col5">
            <ItemServicies
              ImgSrc={icon1}
              ItemText="Lavandería"
              NumberServicesProvided={lenghtAidsRequestType("Lavandería")}
            />
            <ItemServicies
              ImgSrc={icon2}
              ItemText="Supermercado"
              NumberServicesProvided={lenghtAidsRequestType("Supermercado")}
            />
            <ItemServicies
              ImgSrc={icon3}
              ItemText="Parafarmacia"
              NumberServicesProvided={lenghtAidsRequestType("Parafarmacia")}
            />
            <ItemServicies
              ImgSrc={icon4}
              ItemText="Tareas domésticas"
              NumberServicesProvided={lenghtAidsRequestType(
                "Tareas domésticas"
              )}
            />
            <ItemServicies
              ImgSrc={icon5}
              ItemText="Animales domésticos"
              NumberServicesProvided={lenghtAidsRequestType(
                "Animales domésticos"
              )}
            />
          </div>
        </SectionServicesProvided>
      </SectionBox>
    </>
  );
};

export const HomeRolPagePrivate = withProtected(HomeRolPage, {
  redirect: false,
});
