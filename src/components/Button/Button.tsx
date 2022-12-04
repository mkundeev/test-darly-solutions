import React from "react";
import * as Styled from "./Button.styled";
interface IProps {
  title: string;
  type?: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
}
export default function Button({
  title,
  type = "button",
  onClick,
  disabled = false,
}: IProps) {
  return (
    <Styled.Button type={type} onClick={onClick} disabled={disabled}>
      {title}
    </Styled.Button>
  );
}
