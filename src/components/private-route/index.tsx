import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "redux/reducers";

function PrivateRoute({ children }) {
  const { pathname } = useLocation();

  const { currentUser } = useSelector((state: RootState) => state.user);

  return currentUser ? (
    <div>{children}</div>
  ) : (
    <Navigate to={`/login?url=${pathname}`} />
  );
}

export default PrivateRoute;
