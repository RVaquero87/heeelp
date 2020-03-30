import React, { useContext } from "react";
import { PrincipalContext } from "../context/PrincipalContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const { user } = useContext(PrincipalContext);

  return (
    <>
      {user && <h1>Welcome {user.username}</h1>}
      <Header />
      <section className="container">{children}</section>
      <Footer />
    </>
  );
};
