import React, { useEffect, useState } from "react";
import * as S from "./selectionNewReduce.style";
import paths from "./../../../../Constants/paths";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../../Redux/Action";
export default function SelectionNewProduct() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.Reduce);

  const { dataBook: dataBook, login: login } = state;
  const result = [];
  for (var i = 0; i < dataBook.length; i++) {
    if (i < 4) {
      result.push(dataBook[i]);
    }
  }
  useEffect(() => {
    dispatch(getBooks());
  }, []);
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
