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
  const {} = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <SectionBox justify="center" column bgColor="grey">
        <SectionServicesProvided className="contain" data-aos="fade-up">
          <H2 color="black">Total de servicios prestados</H2>
          <ParagraphTop className="total-services">22</ParagraphTop>

          <div className="col5">
            <ItemServicies
              ImgSrc={icon1}
              ItemText="Lavandería"
              NumberServicesProvided="5"
            />
            <ItemServicies
              ImgSrc={icon2}
              ItemText="Supermercado"
              NumberServicesProvided="5"
            />
            <ItemServicies
              ImgSrc={icon3}
              ItemText="Parafarmacia"
              NumberServicesProvided="5"
            />
            <ItemServicies
              ImgSrc={icon4}
              ItemText="Tareas domésticas"
              NumberServicesProvided="0"
            />
            <ItemServicies
              ImgSrc={icon5}
              ItemText="Animales domésticos"
              NumberServicesProvided="5"
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
