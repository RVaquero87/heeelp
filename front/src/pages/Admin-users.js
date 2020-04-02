import React, { useContext, useState, useEffect } from "react";
import { withProtected } from "../lib/protectRoute.hoc";
import { getListUsers } from "../services/authServices";
import { PrincipalContext } from "../context/PrincipalContext";
import { Loading } from "../components/Loading/index";
import { UserBoxItem } from "../components/ListUser/index";

const AdminUsersPage = () => {
  const { changeLisUsers } = useContext(PrincipalContext);

  const [listUsers, setListUsers] = useState();

  useEffect(() => {
    getListUsers()
      .then(user => {
        setListUsers(user);
      })
      .catch(e => {});
  }, [changeLisUsers]);

  //set stado
  return (
    <>
      {!listUsers ? (
        <Loading />
      ) : (
        <div data-aos="fade-up">
          {listUsers.map((user, i) => {
            return <UserBoxItem user={user} key={i} />;
          })}
        </div>
      )}
    </>
  );
};
export const AdminUsers = withProtected(AdminUsersPage, { redirect: false });
