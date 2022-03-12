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
    // console.log(object);
  };
  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-xl font-bold">Inomma</h1>
      <ul className="flex justify-start items-center text-sm font-bold">
        {currentUser ? (
          <li className="mr-3">
            <span className="cursor-pointer" onClick={logout}>
              Log Out
            </span>
          </li>
        ) : (
          <li className="mr-3">
            <Link to="/login">Login</Link>
          </li>
        )}
        {currentUser && (
          <li className="mr-3">
            <Link to="/admin/add/product">Add Product</Link>{" "}
          </li>
        )}
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
      </ul>
    </header>
  );
}
