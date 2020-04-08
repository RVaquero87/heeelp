//React
import React from "react";

//Images
import loading from "../../../public/images/loading.gif";

//Styles
import { LoadingBox } from "./styles/Loading.styles";

export const Loading = () => (
  <LoadingBox>
    <img src={loading} />
  </LoadingBox>
);
