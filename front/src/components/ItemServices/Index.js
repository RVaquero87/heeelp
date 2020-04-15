//React
import React from "react";

//Styles & AOS animation
import { BoxImg, Paragraphs, ParagraphTop } from "../../styles/Index.styles";
import { ItemServiceRate } from "./styles/ItemServices.styles";

export const ItemServicies = ({
  ImgSrc,
  ItemText,
  ItemContent = false,
  NumberServicesProvided = "false",
}) => {
  return (
    <ItemServiceRate className={NumberServicesProvided == 0 ? "disabled" : ""}>
      <BoxImg>
        <img src={ImgSrc} title={ItemText} name={ItemText} />
      </BoxImg>
      <Paragraphs blue className={ItemContent && "title-content"}>
        <span>{ItemText}</span>
      </Paragraphs>
      {ItemContent && (
        <Paragraphs blue className="content-services">
          {ItemContent}
        </Paragraphs>
      )}
      {NumberServicesProvided != "false" && (
        <ParagraphTop blue className="number-services">
          <span>{NumberServicesProvided}</span>
        </ParagraphTop>
      )}
    </ItemServiceRate>
  );
};
