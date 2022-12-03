import styled from "styled-components";
import { COLORS, SPACES } from "../../theam";

export const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Modal = styled.div`
  position: absolute;
  top: ${SPACES.xxxl};
  transform: translateX(-50%);
  left: 50%;
  border-radius: 1rem;
  min-width: 500px;
  min-height: 500px;
  background-color: ${COLORS.white};
`;
