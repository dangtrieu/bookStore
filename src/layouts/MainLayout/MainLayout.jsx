import React from "react";
import Header from "../../components/Header/Header";
import LatePage from "../../components/LatePage/LatePage";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {/* content */}
      {children}

      <LatePage />
    </>
  );
}

export default MainLayout;
