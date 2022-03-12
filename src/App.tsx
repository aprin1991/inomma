import "styles/global.scss";
import { Provider, useDispatch } from "react-redux";
import store from "redux/store";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Container } from "components";
import { Header } from "components";
import PrivateRoute from "components/private-route";
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const AddProduct = lazy(() => import("./pages/admin/product/add"));
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Header />
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
                  <Login />
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
        </Container>
      </div>
    </Provider>
  );
}

export default App;
