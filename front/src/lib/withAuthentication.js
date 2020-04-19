//React
import React, { useEffect, useContext } from "react";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { whoUser } from "../services/authServices";

//Compoments
import { Loading } from "../components/Loading/";

// THIS is a HOC
export const withAuthentication = (Component) => () => {
  const { setUser, loading, setLoading } = useContext(PrincipalContext);

  useEffect(() => {
    whoUser()
      .then((user) => {
        setUser(user);
      })
      .catch((e) => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Component />
    </>
  );
};
