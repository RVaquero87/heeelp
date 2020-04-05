import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ whereTo, children, className }) => {
  return (
    <Link className={className} to={whereTo}>
      {children}
    </Link>
  );
};
