import React from "react";
import Maxfooter from "../../childerComponent/childFooter/maxFooter/Maxfooter";
import SliderFooter from "../../childerComponent/childFooter/sliderFooter/SliderFooter";
import SellLeft from "../../childerComponent/giamgia/sellleft/SellLeft";
import Sellright from "../../childerComponent/giamgia/sellRight/Sellright";
import * as S from "./footer.style";
export default function Footer() {
  return (
    <S.Footers>
      <S.Container>
        <S.maxWidths>
          <SliderFooter />
          <Maxfooter />
        </S.maxWidths>
        <S.Products>
          <SellLeft />
          <Sellright />
        </S.Products>
      </S.Container>
    </S.Footers>
  );
}
