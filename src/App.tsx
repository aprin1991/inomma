import "styles/global.scss";
import { useSelector } from "react-redux";

import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";

import { Container } from "components";
import { Header } from "components";
import PrivateRoute from "components/private-route";
import { RootState } from "redux/reducers";
import Custom404 from "pages/404";
import Loading from "components/loading";
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
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loading />}>
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
                <Suspense fallback={<Loading />}>
                  <PrivateRoute>
                    <AddProduct />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <Custom404 />
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
