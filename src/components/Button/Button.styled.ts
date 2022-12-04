import styled from "styled-components";
import { SPACES, COLORS, BUTTON, SHADOW } from "../../theam";

export const Button = styled.button`
  padding: 0 ${SPACES.m};
  height: ${BUTTON.height};
  min-width: ${BUTTON.minWith};
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.black};
  box-shadow: ${SHADOW.button};
  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }
  &:disabled {
    background-color: ${COLORS.ligthGrey};
    color: ${COLORS.white};
  }
`;
