import React from "react";
import * as S from "./discountproducts.style";
import { FaShoppingBag } from "react-icons/fa";
import paths from "./../../../../Constants/paths";
import { useDispatch, useSelector } from "react-redux";

export default function DiscountProducts() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.Reduce);
  const { dataBook: dataBook, login: login } = state;

  let data = [];
  for (var i = 0; i < dataBook.length; i++) {
    if (dataBook[i].price === 56000) {
      dataBook[i].price = dataBook[i].price - (dataBook[i].price * 10) / 100;
      data.push(dataBook[i]);
    }
  }
  console.log(data);
  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm Giảm giá </span>
        </S.selectionnewProduct>
        <S.selectionnewProduct>Xem tất cả {">>"}</S.selectionnewProduct>
      </S.newProduct>
      <S.boxgrow>
        {data.map((x, i) => (
          <S.boxProductNew key={i}>
            <S.paddingProductnew>
              <S.boxImg
                to={{
                  pathname: paths.detail,
                  search: "?id=" + x.id,
                }}
              >
                <img src={x.img} />
              </S.boxImg>
              <S.tablePrice>
                <h3 to={paths.detail}>{x.name}</h3>
                <S.spricebox>
                  <h5>{x.price}</h5>
                  <h3>30.000đ</h3>
                </S.spricebox>
                <S.buttonclick>
                  <S.bags>
                    <FaShoppingBag />
                  </S.bags>
                  <S.Spans>Thêm vào giỏ hàng</S.Spans>
                </S.buttonclick>
              </S.tablePrice>
            </S.paddingProductnew>
          </S.boxProductNew>
        ))}
      </S.boxgrow>
    </S.boxx>
  );
}
