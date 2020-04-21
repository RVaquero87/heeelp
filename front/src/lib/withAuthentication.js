//React
import React, { useEffect, useContext } from "react";

//Contexto
import { PrincipalContext } from "../context/PrincipalContext";

//Functional & Services
import { whoUser } from "../services/authServices";

//Compoments
import Loading from "../components/Loading";

// THIS is a HOC
export const withAuthentication = (Component) => () => {
  const { setUser, loading, setLoading, Body } = useContext(PrincipalContext);

  useEffect(() => {
    whoUser()
      .then((user) => {
        setUser(user);
      })
      .catch((e) => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    {
      loading
        ? Body[0].classList.add("active")
        : Body[0].classList.remove("active");
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <Component />
    </>
  );
};
