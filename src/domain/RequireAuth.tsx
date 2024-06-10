import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth: React.FC<{}> = () => {
  const auth = JSON.parse(localStorage.getItem("user") as string);
  console.log("auth",auth);
  

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};
export default RequireAuth;
