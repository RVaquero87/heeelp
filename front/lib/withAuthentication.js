import React, { useState, useEffect } from "react";
import { UserContext, whoami } from "./auth.api";
import { Loading } from "../src/components/Loading/index";

// THIS is a HOC
export const withAuthentication = Component => () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    whoami()
      .then(user => {
        console.error(`Welcome again user ${user.username}`);
        setUser(user);
      })
      .catch(e => {
        console.error("No user logged in ");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {loading && <Loading />}
      <Component />
    </UserContext.Provider>
  );
};
