import React, { useContext } from "react";
import { PrincipalContext } from "../context/PrincipalContext";

export const HomePage = () => {
  const { user } = useContext(PrincipalContext);

  return (
    <div data-aos="fade-up">
      Home esta mos en lsk dlkas dlsa dlsa ldk ask dlaskd salk dlkas dlkas dlka
      slkd {user?.username}
    </div>
  );
};
