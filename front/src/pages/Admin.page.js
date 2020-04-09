//React
import React, { useEffect, useState } from "react";

//Route Protected
import { withProtected } from "../lib/protectRoute.hoc";

//Styles & AOS animation
import { Button } from "../../public/styles/Common.styles";

//Images
import people from "../../public/images/people.svg";

//Functional & Services
import { scrollInit } from "../lib/commonFunctional";

//Compoments
import { ButtonLink } from "../components/ButtonLink/Index";
import { AdminUsers } from "./admin/Admin-users";
import { AdminReviews } from "./admin/Admin-reviews";
import { AdminContact } from "./admin/Admin-contact";

export const AdminPanel = () => {
  //Reset Scroll
  useEffect(() => {
    scrollInit();
  }, []);

  //Tabs Buttons
  const [tabsAdmin, setTabsAdmin] = useState("users");

  const getComponentAdmin = (e, value) => {
    e.preventDefault();
    setTabsAdmin(value);
  };

  return (
    <>
      <div className="button-box">
        <Button
          value="users"
          onClick={(e) => getComponentAdmin(e, e.target.value)}
        >
          Users
        </Button>
        <Button
          value="reviews"
          onClick={(e) => getComponentAdmin(e, e.target.value)}
        >
          Reviews
        </Button>
        <Button
          value="messages"
          onClick={(e) => getComponentAdmin(e, e.target.value)}
        >
          Mesaage COntact
        </Button>
      </div>
      <div>
        {tabsAdmin === "users" && <AdminUsers data-aos="fade-up" />}
        {tabsAdmin === "reviews" && <AdminReviews data-aos="fade-up" />}
        {tabsAdmin === "messages" && <AdminContact data-aos="fade-up" />}
      </div>
    </>
  );
};

//Page Protected
export const AdminPage = withProtected(AdminPanel, { redirect: false });
