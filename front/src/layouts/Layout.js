//React
import React from "react";

//Styles & AOS animation
import { Main } from "../styles/Index.styles";

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
