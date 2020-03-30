import React from "react";
import { Link } from "react-router-dom";
import { useUser, useUserLogout } from "../../lib/auth.api";

export const Header = () => {
  const user = useUser();
  const handleLogout = useUserLogout();
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
