import React from "react";
import * as S from "./textInputpass.style";
function TextPassword({ value, onChange, name, placeholder, ...res }) {
  return (
    <S.subcriseinput>
      <input
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </S.subcriseinput>
  );
}

export default TextPassword;
