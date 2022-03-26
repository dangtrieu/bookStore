import React from "react";

function TextInput({ onChange, value, ...rest }) {
  return <input value={value} onChange={onChange} />;
}

export default TextInput;
