import styled from "styled-components";
import { SPACES } from "../../theam";

interface IProps {
  maxWidth?: string;
  marginTop?: string;
}
export const Container = styled.div<IProps>`
  margin: 0 auto;
  padding: ${SPACES.m};
  margin-top: ${(p) => p.marginTop || SPACES.xl};
  max-width: ${(p) => p.maxWidth || "fit-content"};
`;
