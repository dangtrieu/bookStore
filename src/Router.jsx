import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";
import LoginPage from "./pages/Auth/Login/LoginPage";
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
            <h2>register</h2>
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default Router;
