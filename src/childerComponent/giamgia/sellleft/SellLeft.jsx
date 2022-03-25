import React from "react";
import SelectBoxleft from "../boxleft/selectboxLeft/SelectBoxleft";
import SuportOnline from "../boxleft/SupportOnline/SuportOnline";
import FeedBack from "../boxleft/feedback/FeedBack";
import * as S from "./selleft.style";
import SocialNeword from "../boxleft/SocialNetwork/SocialNeword";
import News from "../boxleft/News/News";
export default function SellLeft() {
  return (
    <S.rowsLeft>
      <SelectBoxleft />
      <SuportOnline />
      <FeedBack />
      <SocialNeword />
      <News />
    </S.rowsLeft>
  );
}
