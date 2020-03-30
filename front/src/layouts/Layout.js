import React from "react";
import { Header } from "./Header";
import { useUser } from "../../lib/auth.api";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const user = useUser();
  return (
    <>
      {user && <h1>Welcome {user.username}</h1>}
      <Header />
      <section className="container">{children}</section>
      <Footer />
    </>
  );
};
