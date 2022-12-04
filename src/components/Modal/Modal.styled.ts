import styled from "styled-components";
import { COLORS, SPACES } from "../../theam";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export const CloseIcon = styled(CloseOutline)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: auto;
  cursor: pointer;
  &:hover {
    color: ${COLORS.primary};
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

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
  padding: ${SPACES.m};
  border-radius: 1rem;
  min-width: 500px;
  min-height: 500px;
  background-color: ${COLORS.white};
`;
