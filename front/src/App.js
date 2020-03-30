import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home.page";
import { LoginPage } from "./pages/Login.page";
import { SignUpPage } from "./pages/SignUp.page";
import { PrivatePage } from "./pages/Private.page";
import { withAuthentication } from "../lib/withAuthentication";

export const App = withAuthentication(() => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/signup" component={SignUpPage} />
        <Route path="/private" component={PrivatePage} />
      </Switch>
    </Layout>
  </BrowserRouter>
));
