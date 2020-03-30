import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

// Authentication
import { withAuthentication } from "./lib/withAuthentication";

// Pages
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { PrivatePage } from "./pages/Private.page";
import { ProfilePage } from "./pages/Profile.page";

export const App = withAuthentication(() => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/private" exact component={PrivatePage} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    </Layout>
  </BrowserRouter>
));
