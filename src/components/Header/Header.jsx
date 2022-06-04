import React from "react";
import * as S from "./header.style";
import "bootstrap/dist/css/bootstrap.css";
import ListMenu from "../menu/listmenu/ListMenu";
import {
  FaLock,
  FaSignInAlt,
  FaCheckSquare,
  FaCube,
  FaExchangeAlt,
  FaLifeRing,
  FaSortDown,
  FaShoppingCart,
  FaWindowClose,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <S.StyledHeader>
        <S.login>
          <S.LoginIcon>
            <S.tabIcon>
              <FaLock />
              THANH TOÁN 1
            </S.tabIcon>
            <S.tabIcon>
              <FaSignInAlt />
              ĐĂNG KÍ
            </S.tabIcon>
            <S.tabIcon>
              <FaCheckSquare />
              ĐĂNG NHẬP
            </S.tabIcon>
          </S.LoginIcon>
        </S.login>
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
                <S.Delivery>
                  <S.boxSvg>
                    <FaCube />
                  </S.boxSvg>
                  GIAO HÀNG FREE
                </S.Delivery>
                <S.Delivery>
                  <S.boxSvg>
                    <FaExchangeAlt />
                  </S.boxSvg>
                  GIAO HÀNG FREE
                </S.Delivery>
                <S.Delivery>
                  <S.boxSvg>
                    <FaLifeRing />
                  </S.boxSvg>
                  GIAO HÀNG FREE
                </S.Delivery>
              </S.HeaderBrand>
              <S.boxcart>
                <S.Cart>
                  <FaShoppingCart />
                  sản phẩm
                  <FaSortDown />
                </S.Cart>
                <S.cartNo>
                  <S.boxsimgs>
                    <S.imgsIcon>
                      <img
                        src="https://bizweb.dktcdn.net/thumb/compact/100/047/782/products/pippi-tat-dai-tai-ban--1-.jpg"
                        alt=""
                      />
                    </S.imgsIcon>
                    <S.Textbox>
                      <spam>pipi tất dài</spam>
                      <h5>56.000d</h5>
                      <S.amount>
                        <S.apartfrom>-</S.apartfrom>
                        <S.number>2</S.number>
                        <S.adds>+</S.adds>
                      </S.amount>
                    </S.Textbox>
                    <S.closes>
                      <FaWindowClose />
                    </S.closes>
                  </S.boxsimgs>
                  <S.manys>
                    <S.titlemany>tổng tiền: 114000đ</S.titlemany>
                    <S.boxbuttonmn>
                      <S.buttonmany>Thanh Toán</S.buttonmany>
                      <S.buttonmany>Giở Hàng</S.buttonmany>
                    </S.boxbuttonmn>
                  </S.manys>
                  {/* <S.blockCart>
                    <img src="https://www.baotinmanhhai.vn/assets/images/no-cart.png" />
                  </S.blockCart>
                  <span>chưa có giỏ hàng</span> */}
                </S.cartNo>
              </S.boxcart>
            </S.Rowss>
          </S.Container>
        </S.Midheader>
      </S.StyledHeader>
      <ListMenu />
    </>
  );
}
