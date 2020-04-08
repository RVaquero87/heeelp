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
import { GlobalContent } from "../public/styles/Common.styles";

//Header - Footer
import { Layout } from "./layouts/Layout";

// Pages Routes
import { HomePage } from "./pages/Home.page";
import { ServicesPage } from "./pages/Services.page";
import { FaqsPage } from "./pages/Faqs.page";
import { ReviewsPage } from "./pages/Reviews.page";
import { TermsConditionsPage } from "./pages/TermsCoditions.page";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy.page";
import { ContactPage } from "./pages/Contact.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { PrivatePage } from "./pages/Private.page";
import { ProfilePage } from "./pages/Profile.page";
import { AdminUsers } from "./pages/Admin-users";
import { AdminReviews } from "./pages/Admin-reviews";
import { CreateReview } from "./pages/create-reviews";

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
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/private" component={PrivatePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/admin" component={AdminUsers} />
            <Route path="/admin2" component={AdminReviews} />
            <Route path="/create-review" component={CreateReview} />
          </Switch>
        </Layout>
      </GlobalContent>
    </BrowserRouter>
  );
});
