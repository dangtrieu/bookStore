import React, { useEffect, useState } from "react";
import * as S from "./selectionNewReduce.style";

import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../../Redux/Action";
export default function SelectionNewProduct() {
  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);
  const state = useSelector((state) => state);

  const { dataBook: dataBook, login: login } = state;
  console.log(dataBook);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm mới</span>
        </S.selectionnewProduct>
        <S.selectionnewProduct>Xem tất cả >></S.selectionnewProduct>
      </S.newProduct>
      <S.boxgrow>
        {dataBook.map((value, index) => (
          <S.boxProductNew key={index}>
            <S.paddingProductnew>
              <img src={value.img} />
              <S.tablePrice>
                <h3>{value.name}</h3>
                <S.spricebox>
                  <h5>{value.price}</h5>
                  <h3>30.000đ</h3>
                </S.spricebox>
                <S.buttonclick>
                  <S.bags>
                    <FaShoppingBag />
                  </S.bags>
                  <S.Spans>Thêm vào giỏ hàng </S.Spans>
                </S.buttonclick>
              </S.tablePrice>
            </S.paddingProductnew>
          </S.boxProductNew>
        ))}
      </S.boxgrow>
    </S.boxx>
  );
}
