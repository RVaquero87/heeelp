//React
import React, { useContext } from "react";

//Styles & AOS animation
import {
  SectionBox,
  Paragraphs,
  ContainDivDefault,
} from "../../../public/styles/Common.styles";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Compoments
import { ReviewsBoxItem } from "../../components/ListItemReviews/Index";

export const AdminContact = () => {
  return (
    <>
      {!filterReviews ? (
        <SectionBox column>
          <ContainDivDefault>
            <Paragraphs blue>
              <span>Loading...</span>
            </Paragraphs>
          </ContainDivDefault>
        </SectionBox>
      ) : (
        <>
          <SectionBox column></SectionBox>
        </>
      )}
    </>
  );
};
