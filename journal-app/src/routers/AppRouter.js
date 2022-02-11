import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
import AuthRouter from "./AuthRouter";

import JournalScreen from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    //esperando respuesta de firebase
    return <h1>Please, wait...</h1>; //de forma temporal
  }
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <PublicRoute
            isAuthenticated={isLogged}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoute
            isAuthenticated={isLogged}
            exact
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
