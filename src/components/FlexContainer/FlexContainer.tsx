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
}: IProps) {
  return (
    <Styled.FlexContainer
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      marginTop={marginTop}
    >
      {children}
    </Styled.FlexContainer>
  );
}
