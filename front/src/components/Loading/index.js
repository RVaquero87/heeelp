import React from "react";
import { LoadingBox } from "./styles/Loading.styles";

import loading from "../../../public/images/loading.gif";

export const Loading = () => (
  <LoadingBox>
    <img src={loading} />
  </LoadingBox>
);
