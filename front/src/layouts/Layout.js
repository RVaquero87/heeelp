//React
import React from "react";

//Styles & AOS animation
import { Main } from "../../public/styles/Common.styles";

//Header - Footer
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
