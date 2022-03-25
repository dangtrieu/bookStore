import React from "react";
import DiscountProducts from "../boxRight/discountproducts/DiscountProducts";
import Highlightsproduct from "../boxRight/Highlightsproduct/Highlightsproduct";
import SelectionNewProduct from "../boxRight/selectProductItem1/SelectionNewProduct";
import * as S from "./sellRight.style";
export default function Sellright() {
  return (
    <S.rowRight>
      <S.sectionProduct>
        <SelectionNewProduct />
        <DiscountProducts />

        <Highlightsproduct />
      </S.sectionProduct>
    </S.rowRight>
  );
}
