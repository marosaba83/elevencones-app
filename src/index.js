import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import * as serviceWorker from './serviceWorker';

import Index from './pages/Index';
// import Landing from "views/examples/Landing.jsx";
// import LoginExample from "views/examples/Login.jsx";
// import Profile from "views/examples/Profile.jsx";
// import Register from "views/examples/Register.jsx";

import SignUp from "pages/SignUp";
// import SignIn from "views/SignIn.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      {/* <Route path="/landing-page" exact render={props => <Landing {...props} />} /> */}
      {/* <Route path="/login-page" exact render={props => <LoginExample {...props} />} /> */}
      {/* <Route path="/profile-page" exact render={props => <Profile {...props} />} /> */}
      {/* <Route path="/register-page" exact render={props => <Register {...props} />} /> */}
      <Route path="/signup" exact render={props => <SignUp {...props} />} />
      {/* <Route path="/signin" exact render={props => <SignIn {...props} />} /> */}
      {/* <Route path="/forgot" exact render={props => <Register {...props} />} /> */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
