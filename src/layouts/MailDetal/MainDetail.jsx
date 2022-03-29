import React from "react";
import Header from "../../components/Header/Header";
import LatePage from "../../components/LatePage/LatePage";

function MainDetail({ children }) {
  return (
    <>
      <Header />
      {children}
      <LatePage />
    </>
  );
}

export default MainDetail;
