import React from "react";
import * as S from "./listMenu.style";
export default function ListMenu() {
  return (
    <S.ListMenu>
      <S.Container>
        <S.fortmat>
          <S.Menus>
            <S.conten>TRANG CHU</S.conten>
            <S.conten>GIOI THIEU</S.conten>
            <S.conten>TRANG SUC</S.conten>
            <S.conten>TIN TUC </S.conten>
            <S.conten>LIEN HE </S.conten>
          </S.Menus>
          <S.searchs>tim kiem</S.searchs>
        </S.fortmat>
      </S.Container>
    </S.ListMenu>
  );
}
