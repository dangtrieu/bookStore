import React from "react";
import * as S from "./TextInputEmail.style";

function TextInputEmail({ onChange, value, ...rest }) {
  return (
    <S.subcriseinput>
      <input value={value} onChange={onChange} placeholder="Email" />
    </S.subcriseinput>
  );
}

export default TextInputEmail;
