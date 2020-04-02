import React, { useContext, useState, useEffect } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";
import { doUnsubscribe } from "../../services/authServices";
import { SelectBox } from "../../components/Select/index";

export const UserBoxItem = ({ user }) => {
  const { setMessageError, changeLisUsers, setchangeLisUsers } = useContext(
    PrincipalContext
  );

  const deleteUser = async (e, value) => {
    e.preventDefault();
    console.log("valor", value);
    const responseServerDelete = await doUnsubscribe({ _id: value });
    setchangeLisUsers(!changeLisUsers);
    setMessageError(responseServerDelete.message);
    setTimeout(() => {
      setMessageError(null);
    }, 5000);
  };
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.country}</p>
      <p>{user._id}</p>

      <form></form>

      <button value={user._id} onClick={e => deleteUser(e, e.target.value)}>
        elimnar
      </button>
    </div>
  );
};
