import React from "react";
import * as S from "./selectionNewReduce.style";

import { FaShoppingBag } from "react-icons/fa";
export default function SelectionNewProduct() {
  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm mới</span>
        </S.selectionnewProduct>
        <S.selectionnewProduct>Xem tất cả >></S.selectionnewProduct>
      </S.newProduct>
      <S.boxgrow>
        <S.boxProductNew>
          <S.paddingProductnew>
            <img src="https://bizweb.dktcdn.net/thumb/large/100/047/782/products/di-qua-hoa-cuc-tai-ban--1-.jpg?v=1453198485223" />
            <S.tablePrice>
              <h3>Đi Qua Hoa Cúc</h3>
              <S.spricebox>
                <h5>30.000đ</h5>
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
      </S.boxgrow>
    </S.boxx>
  );
}
