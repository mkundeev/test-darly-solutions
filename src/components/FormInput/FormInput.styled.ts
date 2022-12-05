import styled from "styled-components";
import { Field } from "formik";
import { COLORS, FONTS, SPACES, FORM } from "../../theam";

export const Label = styled.label`
  font-weight: ${FONTS.WEIGHTS.bold};
  margin-bottom: ${SPACES.s};
`;
export const Error = styled.div`
  color: ${COLORS.error};
`;
export const Input = styled(Field)`
  width: ${FORM.inputWidth};
`;
export const Info = styled.p`
  margin-bottom: ${SPACES.s};
`;
export const Required = styled.span`
  color: ${COLORS.error};
`;
