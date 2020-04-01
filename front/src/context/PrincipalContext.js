import React, { createContext, useState } from "react";

export const PrincipalContext = createContext();
export const PrincipalContextProvider = props => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  return (
    <PrincipalContext.Provider value={{ user, setUser, loading, setLoading }}>
      {props.children}
    </PrincipalContext.Provider>
  );
};
