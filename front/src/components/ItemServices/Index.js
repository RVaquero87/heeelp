//React
import React from "react";

//Styles & AOS animation
import { BoxImg, Paragraphs } from "../../../public/styles/Common.styles";
import { ItemServiceRate } from "./styles/ItemServices.styles";

export const ItemServicies = ({ ImgSrc, ItemText, ItemContent = false }) => {
  return (
    <ItemServiceRate>
      <BoxImg>
        <img src={ImgSrc} title={ItemText} name={ItemText} />
      </BoxImg>
      <Paragraphs blue className={ ItemContent && "title-content"}>
        <span>{ItemText}</span>
      </Paragraphs>
      { ItemContent && <Paragraphs blue className="content-services">{ItemContent}</Paragraphs>}
    </ItemServiceRate>
  );
};
