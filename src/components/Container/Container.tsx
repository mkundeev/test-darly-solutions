import React from "react";
import * as Styled from "./Container.styled";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  maxWidth?: string;
  marginTop?: string;
}
export default function Container({ children, maxWidth, marginTop }: IProps) {
  return (
    <Styled.Container maxWidth={maxWidth} marginTop={marginTop}>
      {children}
    </Styled.Container>
  );
}
