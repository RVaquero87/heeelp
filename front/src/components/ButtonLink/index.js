//React
import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ whereTo, children, className }) => {
  return (
    <Link className={className} to={whereTo}>
      {children}
    </Link>
  );
};
export default ButtonLink;
