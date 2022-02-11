import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
