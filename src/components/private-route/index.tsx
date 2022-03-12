import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "redux/reducers";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);
  console.log("add current::", currentUser);

  return currentUser ? <div>{children}</div> : <Navigate to="/login" />;
}

export default PrivateRoute;
