import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { PublicRouteList, PrivateRouteList } from "./routes";

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <PrivateRouteList /> : <PublicRouteList />;
};
