import React from "react";
import { withProtected } from "../../lib/protectRoute.hoc";

const Page = () => (
  <div>
   <p>Contenido Pagina privada</p>
  </div>
);



//PARA PAGINAS PROTEGIDAS

// Redirect to /auth/login if user is not present
//export const PrivatePage = withProtected(Page);

// Redirect to / if user is not present
//export const PrivatePage = withProtected(Page, { redirectTo: "/" });

// Do not redirect, but show protected page
export const PrivatePage = withProtected(Page, { redirect: false });
