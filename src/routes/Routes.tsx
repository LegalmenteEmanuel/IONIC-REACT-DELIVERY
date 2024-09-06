import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

interface RoutesProps {
  isNative: boolean;
}

const Routes: React.FC<RoutesProps> = ({ isNative }) => {
  return (
    <>
      {isNative ? (
        <>
          {/* Rutas específicas para aplicaciones móviles */}

          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/sign" exact>
            <SignUp />
          </Route>
        </>
      ) : (
        <>
          {/* Rutas específicas para navegadores */}
          <Route path="/" exact>
            <Redirect to="/landing" />
          </Route>
          <Route path="/landing" exact>
            <LandingPage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/sign" exact>
            <SignUp />
          </Route>
        </>
      )}
    </>
  );
};

export default Routes;
