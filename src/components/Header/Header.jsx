import React, { useEffect, useState } from "react";
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
import paths from "../../Constants/paths";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateCart, updateCartS } from "../../Redux/Action";
toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});
export default function Header() {
  const [key, setKey] = React.useState("");
  const cartList = useSelector((state) => state.Reduce.cart);
  const [state, setstate] = useState(0);

  const dispatch = useDispatch();
  const notify = (e) => toast(e);
  const [totalAmount, settotalAmount] = useState(0);
  console.log(cartList);
   useEffect(() => {
    const total = cartList.reduce(
      (total, nextCart) => total + nextCart.book.price * nextCart.count,
      0
    );
    settotalAmount(total);
  }, [cartList]);

  const handleBy = () => {
    if (key) {
      notify("thanh tan thanh cong");
    } else notify("dang nhap de thanh toan");
  };
  React.useEffect(() => {
    handleGetCookie("username");
  }, []);
  const handleGetCookie = (e) => {
    let keys = getCookie(e);
    setKey(keys);
  };
  const handleDeleteGetCookie = () => {
    if (key !== null) {
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    notify("Dang xuat");
    return setKey("");
  };
  const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  return (
    <>
      <S.StyledHeader>
        <S.login>
          <S.LoginIcon>
            {!key && (
              <S.tabIcon to={paths.home}>
                <FaLock /> THANH TOÁN
              </S.tabIcon>
            )}
            {!key && (
              <S.tabIcon to={paths.register}>
                <FaSignInAlt /> ĐĂNG KÍ
              </S.tabIcon>
            )}
            <S.tabIcon to={paths.login}>
              <FaCheckSquare /> {key === "" ? "ĐĂNG NHẬP" : key}
            </S.tabIcon>
            {key && (
              <S.buttons onClick={handleDeleteGetCookie}> ĐĂNG XUẤT</S.buttons>
            )}
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
                  <FaShoppingCart /> sản phẩm <FaSortDown />
                </S.Cart>
                <S.cartNo>
                  {cartList &&
                    cartList.map((x, i) => (
                      <S.boxsimgs key={i}>
                        <S.imgsIcon>
                          <img src={x.book.img} alt="" />
                        </S.imgsIcon>
                        <S.Textbox>
                          <spam>{x.book.name}</spam>
                          <h5>{x.count * x.book.price}</h5>
                          <S.amount>
                            <S.apartfrom onClick={() => setstate(state - 1)}>
                              <S.click onClick={() => dispatch(updateCart(x))}>
                                -
                              </S.click>
                            </S.apartfrom>
                            <S.number>
                              {x.count}
                            </S.number>
                            <S.adds onClick={() => setstate(state + 1)}>
                              <S.click onClick={() => dispatch(updateCartS(x))}>
                                +
                              </S.click>
                            </S.adds>
                          </S.amount>
                        </S.Textbox>
                        <S.closes>
                          <FaWindowClose />
                        </S.closes>
                      </S.boxsimgs>
                    ))}
                  {cartList == 0 && (
                    <S.boc>
                      <S.blockCart>
                        <img src="https://www.baotinmanhhai.vn/assets/images/no-cart.png" />
                      </S.blockCart>
                      <span>chưa có giỏ hàng</span>
                    </S.boc>
                  )}

                  <S.manys>
                    <S.titlemany>
                      tổng tiền:
                      {totalAmount}
                    </S.titlemany>
                    <S.boxbuttonmn>
                      <S.buttonmany>Thanh Toán</S.buttonmany>
                      <S.buttonmany>Giở Hàng</S.buttonmany>
                    </S.boxbuttonmn>
                  </S.manys>
                </S.cartNo>
              </S.boxcart>
            </S.Rowss>
          </S.Container>
          -
        </S.Midheader>
      </S.StyledHeader>
      <ListMenu />
    </>
  );
}
