import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { PrincipalContext } from "../context/PrincipalContext";
import { doLogout } from "../services/authServices";
import { Link } from "react-router-dom";
import { LightBox } from "../../public/styles/Common.styles";

export const Header = withRouter(({ history }) => {
  const { user, setUser, messageError } = useContext(PrincipalContext);

  const onClickLogout = async e => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/" onClick={e => onClickLogout(e)}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
      {messageError && (
        <LightBox data-aos="fade-down">
          <p>{messageError}</p>
        </LightBox>
      )}
    </header>
  );
});
