import React from "react";
import * as S from "./listMenu.style";
import { FaAngleDown, FaSearch } from "react-icons/fa";
export default function ListMenu() {
  return (
    <S.ListMenu>
      <S.Container>
        <S.fortmat>
          <S.Menus>
            <S.conten>trang chủ</S.conten>
            <S.conten>giới thiệu</S.conten>
            <S.conten>
              <S.Products>
                <span>sản phẩm</span>
                <FaAngleDown />
                <S.listProduct>
                  <S.titleProduct>Tạp Chí</S.titleProduct>
                  <S.titleProduct>Truyện Tranh</S.titleProduct>
                  <S.titleProduct>Sách Kinh Tế</S.titleProduct>
                  <S.titleProduct>Sách Văn Học</S.titleProduct>
                  <S.titleProduct>Sách Kỹ Năng</S.titleProduct>
                  <S.titleProduct>Sách Tuổi Teen</S.titleProduct>
                  <S.titleProduct>Sách Thiếu Nhi </S.titleProduct>
                  <S.titleProduct>Sách Thường Thức</S.titleProduct>
                  <S.titleProduct>Sản Phẩm Nổi Bật</S.titleProduct>
                </S.listProduct>
              </S.Products>
            </S.conten>
            <S.conten>tin tức </S.conten>
            <S.conten>liên hệ </S.conten>
          </S.Menus>
          <S.searchs>
            <input type="text" placeholder="Nhập email của bạn..." />
            <FaSearch />
          </S.searchs>
        </S.fortmat>
      </S.Container>
    </S.ListMenu>
  );
}
