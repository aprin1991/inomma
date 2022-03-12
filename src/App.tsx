import "styles/global.scss";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "redux/store";
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";

import { Container } from "components";
import { Header } from "components";
import PrivateRoute from "components/private-route";
import { RootState } from "redux/reducers";
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const AddProduct = lazy(() => import("./pages/admin/product/add"));
function App(): JSX.Element {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [searchParams] = useSearchParams();
  return (
    <div className="App">
      <Container>
        <Header />
        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<>...</>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<>...</>}>
                  {currentUser ? (
                    <Navigate to={searchParams.get("url") ?? "/"} />
                  ) : (
                    <Login />
                  )}
                </Suspense>
              }
            />
            <Route
              path="/admin/add/product"
              element={
                <Suspense fallback={<>...</>}>
                  <PrivateRoute>
                    <AddProduct />
                  </PrivateRoute>
                </Suspense>
              }
            />
          </Routes>
        </main>
      </Container>
    </div>
  );
}

export default App;
