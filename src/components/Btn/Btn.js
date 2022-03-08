import React from "react";
import { Button } from "./Btn.styled";

const Btn = ({ onClick }) => {
  return <Button onClick={onClick}>click me</Button>;
};

export default Btn;
