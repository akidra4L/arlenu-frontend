import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { AuthContext } from "./context/AuthContext";
import { PublicRouteList, PrivateRouteList } from "./routes";

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <PrivateRouteList /> : <PublicRouteList />;
};
