import React, { useEffect, useContext } from "react";
import { PrincipalContext } from "../context/PrincipalContext";
import { whoUser } from "../services/authServices";
import { Loading } from "../components/Loading/index";

// THIS is a HOC
export const withAuthentication = Component => () => {
  const { setUser, loading, setLoading } = useContext(PrincipalContext);

  useEffect(() => {
    whoUser()
      .then(user => {
        setUser(user);
      })
      .catch(e => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Component />
    </>
  );
};
