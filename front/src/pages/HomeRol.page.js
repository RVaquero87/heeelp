//React
import React, { useContext, useEffect } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import {} from "../styles/Index.styles";

//Images
import people from "../../public/images/people.svg";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments

export const HomeRolPage = () => {
  const {} = useContext(PrincipalContext);

  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  return (
    <>
      <p>Hola rol</p>
    </>
  );
};

export const HomeRolPagePrivate = withProtected(HomeRolPage, {
  redirect: false,
});
