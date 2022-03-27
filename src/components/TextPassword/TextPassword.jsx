import React from "react";
import * as S from "./textInputpass.style";
function TextPassword({ value, onChange, ...res }) {
  return (
    <S.subcriseinput>
      <input value={value} onChange={onChange} placeholder="Mật khẩu" />
    </S.subcriseinput>
  );
}

export default TextPassword;
