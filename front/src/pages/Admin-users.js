import React, { useContext } from "react";
import { withProtected } from "../lib/protectRoute.hoc";
import { getListUsers } from "../services/authServices";
import { PrincipalContext } from "../context/PrincipalContext";

export const AdminUsersPage = () => {
  const { user } = useContext(PrincipalContext);

  let usersList = getListUsers();
  usersList = usersList.then(lista => lista.data);
  //set stado
  console.log("usersList", usersList);

  return <div data-aos="fade-up">hola</div>;
};
export const AdminUsers = withProtected(AdminUsersPage, { redirect: false });
