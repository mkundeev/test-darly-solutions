import React from "react";
import * as Styled from "./FlexContainer.styled";

interface IProps extends Styled.IPropsFlexContainer {
  children: React.ReactNode;
}
export default function FlexContainer({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  marginTop,
  width
}: IProps) {
  return (
    <Styled.FlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      marginTop={marginTop}
      width={width}
    >
      {children}
    </Styled.FlexContainer>
  );
}
