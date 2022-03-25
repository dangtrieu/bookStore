import React from "react";
import * as S from "./contens.style";
export default function Contens() {
  return (
    <S.boxs>
      <S.container>
        <S.wraps>
          <S.infomation>
            <S.Title>THÔNG TIN</S.Title>
            <S.listmenu>
              <a href="/">Trang chủ</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/gioi-thieu">Giới thiệu</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/collections/all">Sản phẩm</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/tin-tuc">Tin tức</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/lien-he">Liên hệ</a>
            </S.listmenu>
          </S.infomation>
          <S.infomation>
            <S.Title>CHÍNH SÁCH</S.Title>
            <S.listmenu>
              <a href="/">Ưu Đãi</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/gioi-thieu">Thanh Toán</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/collections/all">Bảo Mật</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/tin-tuc">Hoàn Trả</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/lien-he">Đỗi Cũ</a>
            </S.listmenu>
          </S.infomation>
          <S.infomation>
            <S.Title>HỖ TRỢ</S.Title>
            <S.listmenu>
              <a href="/">Kỹ Thuật</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/gioi-thieu">Hỗ Trợ Thông tin</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/collections/all">Liên Hệ Tổng Đài</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/tin-tuc">Vấn Đề Liên quan</a>
            </S.listmenu>
            <S.listmenu>
              <a href="/lien-he">Nội Quy</a>
            </S.listmenu>
          </S.infomation>
          <S.infomation>
            <S.Title>LIÊN HỆ </S.Title>
          </S.infomation>
        </S.wraps>
      </S.container>
    </S.boxs>
  );
}
