import React, { useState } from "react";
import * as S from "./sliderFooter.style";
import onglesleft from "./../../../images/muitentrai.svg";
import onglesright from "./../../../images/muitenphai.svg";

export default function SliderFooter() {
  const [currenIndex, setCurrenIndex] = useState(0);

  const image = [
    {
      imgs: "https://bizweb.dktcdn.net/thumb/2048x2048/100/047/782/themes/847189/assets/slider_2.jpg?1646216206548",
      id: 1,
      text: "moi ngay mot cuon sach",
    },
    {
      imgs: "https://bizweb.dktcdn.net/thumb/2048x2048/100/047/782/themes/847189/assets/slider_1.jpg?1646216206548",
      id: 2,
      text: "sach dep ben ban",
    },
  ];
  const getActiveSlider = (index, currenIndex) => {
    return index === currenIndex;
  };
  const index = image.findIndex((x) => x);
  const hendletang = () => {
    if (currenIndex <= index) {
      setCurrenIndex(currenIndex + 1);
    } else {
      setCurrenIndex(0);
    }
  };
  const handleDecreseSlide = () => {
    if (currenIndex <= 0) {
      setCurrenIndex(image.length - 1);
    } else setCurrenIndex(currenIndex - 1);
  };
  return (
    <S.boxSlider>
      {image.map((x, index) => (
        <S.sliders key={index} isActive={getActiveSlider(index, currenIndex)}>
          <img src={x.imgs} />
        </S.sliders>
      ))}
      <S.bottomT onClick={hendletang}>
        <img src={onglesleft} />
      </S.bottomT>
      <S.bottomTru onClick={handleDecreseSlide}>
        <img src={onglesright} />
      </S.bottomTru>
    </S.boxSlider>
  );
}
