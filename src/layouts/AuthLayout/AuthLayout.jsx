import React from "react";
import Header from "../../components/Header/Header";
import LatePage from "../../components/LatePage/LatePage";

function AuthLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <LatePage />
    </>
  );
}

export default AuthLayout;
