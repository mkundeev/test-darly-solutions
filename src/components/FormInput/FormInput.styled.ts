import styled from "styled-components";
import { Field } from "formik";
import { COLORS, FONTS, SPACES } from "../../theam";

export const Label = styled.label`
  font-weight: ${FONTS.WEIGHTS.bold};
  margin-bottom: ${SPACES.s};
`;
export const Error = styled.div`
  color: ${COLORS.error};
`;
export const Input = styled(Field)`
  width: 240px;
`;
export const Info = styled.p`
  margin-bottom: ${SPACES.s};
`;
