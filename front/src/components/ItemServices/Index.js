//React
import React from "react";

//Styles & AOS animation
import { BoxImg, Paragraphs } from "../../../public/styles/Common.styles";
import { ItemServiceRate } from "./styles/ItemServices.styles";

export const ItemServicies = ({ ImgSrc, ItemText }) => {
  return (
    <ItemServiceRate>
      <BoxImg>
        <img src={ImgSrc} title={ItemText} name={ItemText} />
      </BoxImg>
      <Paragraphs blue>
        <span>{ItemText}</span>
      </Paragraphs>
    </ItemServiceRate>
  );
};
