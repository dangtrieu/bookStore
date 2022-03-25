import React from "react";
import * as S from "./header.style";
import "bootstrap/dist/css/bootstrap.css";
import ListMenu from "../menu/listmenu/ListMenu";
export default function Header() {
  return (
    <>
      <S.StyledHeader>
        <S.Midheader>
          <S.Container>
            <S.Rowss>
              <S.HeaderIcont>
                <img
                  src="//bizweb.dktcdn.net/100/047/782/themes/847189/assets/logo.png?1646216206548"
                  alt="logo Bookstore"
                />
              </S.HeaderIcont>
              <S.HeaderBrand>
                <S.Delivery>GIAO HÀNG FREE</S.Delivery>
                <S.Delivery>GIAO HÀNG FREE</S.Delivery>
                <S.Delivery>GIAO HÀNG FREE</S.Delivery>
              </S.HeaderBrand>
              <S.Cart>sản phẩm</S.Cart>
            </S.Rowss>
          </S.Container>
        </S.Midheader>
      </S.StyledHeader>
      <ListMenu />
    </>
  );
}
