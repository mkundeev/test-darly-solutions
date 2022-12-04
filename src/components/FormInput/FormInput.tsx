import React from "react";
import { Field, ErrorMessage } from "formik";
import FlexContainer from "../FlexContainer";
import * as Styled from "./FormInput.styled";

interface IProps {
  type: string;
  name: string;
  title: string;
}
export default function FormInput({ name, type, title }: IProps) {
  return (
    <FlexContainer flexDirection="column">
      <Styled.Label htmlFor={name}>{title}</Styled.Label>
      <Styled.Input name={name} type={type} id={name} />
      <ErrorMessage
        name={name}
        render={(msg) => <Styled.Error>{msg}</Styled.Error>}
      />
    </FlexContainer>
  );
}
