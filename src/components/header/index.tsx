import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "redux/reducers";
import { clearCurrentUser } from "redux/user/user.actions";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const logout = () => {
    dispatch(clearCurrentUser());
    navigate("/");
    localStorage.removeItem("user");
  };
  return (
    <header className="flex justify-between items-center p-3 lg:p-6">
      <h1 className="text-lg lg:text-xl font-bold uppercase">
        <Link to="/">Inomma</Link>
      </h1>
      <ul className="flex justify-start items-center text-sm font-medium lg:font-bold">
        <li className="mr-4">
          <Link to="/">Home</Link>{" "}
        </li>
        <li className="mr-4">
          <Link to="/admin/add/product">Add Product</Link>{" "}
        </li>
        {currentUser ? (
          <li>
            <span className="cursor-pointer" onClick={logout}>
              Log Out
            </span>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
