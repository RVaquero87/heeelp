import React, { useContext, useState, useEffect } from "react";
import { withProtected } from "../lib/protectRoute.hoc";
import { getListUsers } from "../services/authServices";
import { PrincipalContext } from "../context/PrincipalContext";
import { Loading } from "../components/Loading/index";

const AdminUsersPage = () => {
  const { user } = useContext(PrincipalContext);

  const [listUsers, setListUsers] = useState();

  let usersList = getListUsers();
  usersList = usersList.then(lista => lista.data);

  //set stado
  return (
    <>
      {!listUsers ? (
        <Loading />
      ) : (
        <div data-aos="fade-up">
          {listUsers.map((user, i) => {
            return (
              <div key={i}>
                <p>{user.username}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export const AdminUsers = withProtected(AdminUsersPage, { redirect: false });
