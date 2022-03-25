import React from "react";
import Contens from "../../childerComponent/LatePagechild/Contens/Contens";
import ImageIcon from "../../childerComponent/LatePagechild/Imageicon/ImageIcon";
import InputPage from "../../childerComponent/LatePagechild/inputPage/InputPage";
import * as S from "./latePage.style";
export default function LatePage() {
  return (
    <S.boxx>
      <InputPage />
      <ImageIcon />
      <Contens/>
    </S.boxx>
  );
}
