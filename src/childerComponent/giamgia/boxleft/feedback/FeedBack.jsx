import React from "react";
import * as S from "./feedback.style";
export default function FeedBack() {
  return (
    <S.Suponline>
      <S.container>
        <S.titleSuport>Phản hồi</S.titleSuport>
        <S.listName>
          <S.listNV>
            '' Thật tuyệt khi mua hàng tại Bookstore, tôi cảm thấy mình được
            phục vụ vô cùng chu đáo và tận tình. Chắc chắn tôi sẽ quay lại mua
            hàng tại Bookstore lần nữa.''
          </S.listNV>
          <S.imgAvata>
            <img src="https://bizweb.dktcdn.net/thumb/compact/100/047/782/themes/847189/assets/clien-say1.jpg?1646216206548" />
          </S.imgAvata>
          <S.imgAvata1>- Christina Lee -</S.imgAvata1>
        </S.listName>
      </S.container>
    </S.Suponline>
  );
}
