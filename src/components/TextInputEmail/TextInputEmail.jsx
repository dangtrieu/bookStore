import React from "react";
import * as S from "./TextInputEmail.style";

function TextInputEmail({ onChange, value, name, ...rest }) {
  return (
    <S.subcriseinput>
      <input
        value={value}
        onChange={onChange}
        name={name}
        placeholder="Email"
      />
    </S.subcriseinput>
  );
}

export default TextInputEmail;
