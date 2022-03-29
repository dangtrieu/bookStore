import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import MainDetail from "./layouts/MailDetal/MainDetail";
import MainLayout from "./layouts/MainLayout/MainLayout";
import LoginPage from "./pages/Auth/Login/LoginPage";
import Register from "./pages/Auth/Register/Register";
import Detail from "./components/detail/Detail";
import HomePage from "./pages/HomePage/HomePage";
function Router() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginPage title="Nhập thông tin đăng nhập" />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
      <Route
        path="/detail"
        element={
          <MainDetail>
            <Detail />
          </MainDetail>
        }
      />
    </Routes>
  );
}

export default Router;
