import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  if (!user) {
    setTimeout(() => {
      navigate("/landing");
    }, 1000);
  }

  return children;
};

export default ProtectedRoute;
