import React from "react";
import * as S from "./suportOnline.style";
import { FaPhoneAlt } from "react-icons/fa";
export default function SuportOnline() {
  return (
    <S.Suponline>
      <S.container>
        <S.titleSuport>HỖ TRỢ TRỰC TUYẾN</S.titleSuport>
        <S.listTitle>
          <S.listName>
            <S.listIcon>
              <FaPhoneAlt />
            </S.listIcon>
            <S.listNV>
              <S.titleName>
                <span>Tư vấn bán hàng 1</span>
              </S.titleName>
              <S.titleName1>
                <span>Mrs. Dung: 18006750</span>
              </S.titleName1>
            </S.listNV>
          </S.listName>
          <S.listName>
            <S.listIcon>
              <FaPhoneAlt />
            </S.listIcon>
            <S.listNV>
              <S.titleName>
                <span>Tư vấn bán hàng 1</span>
              </S.titleName>
              <S.titleName1>
                <span>Mrs. Dung: 18006750</span>
              </S.titleName1>
            </S.listNV>
          </S.listName>
          <S.listName>
            <S.listIcon>
              <FaPhoneAlt />
            </S.listIcon>
            <S.listNV>
              <S.titleName>
                <span>Tư vấn bán hàng 1</span>
              </S.titleName>
              <S.titleName1>
                <span>Mrs. Dung: 18006750</span>
              </S.titleName1>
            </S.listNV>
          </S.listName>
        </S.listTitle>
      </S.container>
    </S.Suponline>
  );
}
