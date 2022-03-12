import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "redux/actions";
import { setCurrentUser } from "redux/user/user.actions";

export const Container = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) ?? [];
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setCurrentUser(user));
    }
    dispatch(setProducts(products));
  }, []);
  return (
    <div className="min-h-screen flex flex-col max-w-2xl w-full mx-auto">
      {children}
    </div>
  );
};
