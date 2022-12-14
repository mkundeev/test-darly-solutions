import styled from "styled-components";
import { AddCircle } from "@styled-icons/fluentui-system-regular";
import { COLORS } from "../../theam";
import { motion } from "framer-motion";

export const AddContactBtn = styled(AddCircle)`
  height: 38px;
  width: auto;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primary};
  }
`;

export const Div = styled(motion.div)`
  height: fit-content;
  width: fit-content;
`;
