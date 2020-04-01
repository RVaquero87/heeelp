import React, { useContext } from "react";
import { PrincipalContext } from "../context/PrincipalContext";
import { getAverage, getByFilter } from "../lib/commonFunctional";

export const HomePage = () => {
  const { user } = useContext(PrincipalContext);

  return (
    <div>
      Home esta mos en lsk dlkas dlsa dlsa ldk ask dlaskd salk dlkas dlkas dlka
      slkd {user?.username}
    </div>
  );
};
