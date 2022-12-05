import styled from "styled-components";
import { COLORS, SPACES } from "../../theam";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { motion } from "framer-motion";

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
  margin-bottom: ${SPACES.m};
`;

export const BackDrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;
export const Modal = styled(motion.div)`
  position: absolute;
  top: ${SPACES.xxxl};
  padding: ${SPACES.m} ${SPACES.xxxl};
  border-radius: 1rem;
  background-color: ${COLORS.white};
`;
