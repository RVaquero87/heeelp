import React from "react";
import ReactDOM from "react-dom";
import { PrincipalContextProvider } from "./context/PrincipalContext";
import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <PrincipalContextProvider>
      <App />
    </PrincipalContextProvider>,
    root
  );
});
