import React from "react";
import * as S from "./Highlightsproduct.style";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import paths from "./../../../../Constants/paths";
export default function Highlightsproduct() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.Reduce);

  const { dataBook: dataBook, login: login } = state;

  const result = [];

  for (var i = 0; i < dataBook.length; i++) {
    const newdate = new Date() - new Date(dataBook[i].date);
    const newnow = newdate / (1000 * 3600 * 24);
    if (newnow < 5) {
      result.push(dataBook[i]);
    }
  }

  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm mới</span>
        </S.selectionnewProduct>
        <S.selectionnewProduct>Xem tất cả {">>"}</S.selectionnewProduct>
      </S.newProduct>
      <S.boxgrow>
        {result.map((x, i) => (
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
                  <h5>{x.price}đ</h5>
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
