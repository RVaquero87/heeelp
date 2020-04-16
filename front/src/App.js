//React
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Styles & AOS animation
import "../public/styles/reset.css";
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";

// Authentication
import { withAuthentication } from "./lib/withAuthentication";

//Global CSS
import { GlobalContent } from "./styles/Index.styles";

//Header - Footer
import { Layout } from "./layouts/Layout";

// Pages Routes
import { HomePage } from "./pages/Home.page";
import { ServicesPage } from "./pages/Services.page";
import { FaqsPage } from "./pages/Faqs.page";
import { ReviewsPage } from "./pages/Reviews.page";
import { TermsConditionsPage } from "./pages/terms-policy/TermsCoditions.page";
import { PrivacyPolicyPage } from "./pages/terms-policy/PrivacyPolicy.page";
import { ContactPage } from "./pages/Contact.page";
import { RegisterPage } from "./pages/Register.page";
import { LoginPage } from "./pages/Login.page";
import { AdminPage } from "./pages/Admin.page";
import { NotFoundPage } from "./pages/NotFound.page";
import { HomeRolPagePrivate } from "./pages/HomeRol.page";
import { ProfilePage } from "./pages/Profile.page";
import { MyRequestsPrivate } from "./pages/MyRequest.page";
import { MyRequestDetailsRolPagePrivate } from "./pages/AidRequestDetail.page";
import { ListAidsRequestPagePrivate } from "./pages/ListAidsRequest";

export const App = withAuthentication(() => {
  AOS.init();

  return (
    <BrowserRouter>
      <GlobalContent>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/servicios-tarifas" component={ServicesPage} />
            <Route path="/faqs" component={FaqsPage} />
            <Route path="/reviews" component={ReviewsPage} />
            <Route
              path="/terminos-y-condiciones"
              component={TermsConditionsPage}
            />
            <Route
              path="/politica-de-privacidad"
              component={PrivacyPolicyPage}
            />
            <Route path="/contacto" component={ContactPage} />
            <Route path="/registro" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/control-admin" component={AdminPage} />
            <Route path="/home" component={HomeRolPagePrivate} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/mis-peticiones" component={MyRequestsPrivate} />
            <Route
              path="/mi-peticion/:id"
              component={MyRequestDetailsRolPagePrivate}
            />
            <Route
              path="/listado-de-peticiones"
              component={ListAidsRequestPagePrivate}
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout>
      </GlobalContent>
    </BrowserRouter>
  );
});
