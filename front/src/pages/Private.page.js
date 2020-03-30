import React, { useContext } from "react";
import { withProtected } from "../lib/protectRoute.hoc";
import { PrincipalContext } from "../context/PrincipalContext";

const Page = () => {
  const { user } = useContext(PrincipalContext);

  return (
    <div>
      {user && (
        <p>
          {user.name} {user.lastname}
        </p>
      )}
    </div>
  );
};

//PARA PAGINAS PROTEGIDAS

// Redirect to /auth/login if user is not present
//export const PrivatePage = withProtected(Page);

// Redirect to / if user is not present
//export const PrivatePage = withProtected(Page, { redirectTo: "/" });

// Do not redirect, but show protected page
export const PrivatePage = withProtected(Page, { redirect: false });
