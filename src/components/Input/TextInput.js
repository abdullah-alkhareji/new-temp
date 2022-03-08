import React from "react";
import { Input } from "./TextInput.styled";

const TextInput = ({ placeholder, onChange }) => {
  return <Input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default TextInput;
