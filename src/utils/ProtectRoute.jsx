import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const logIn = JSON.parse(localStorage.getItem("token"));

  if(!logIn){
    // if (logIn.name !== "admin" && logIn.password !== "123") {
        return <Navigate to="/login" />;
    // }
  }
    return children
};

export default ProtectRoute;
