import React from "react";
import { flip } from "../../utils/modalAnimation";
import * as Styled from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}
export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    <Styled.BackDrop onClick={onClose}>
      <Styled.Modal
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Styled.CloseIcon onClick={onClose} />
        {title && <Styled.Title>{title}</Styled.Title>}
        {children}
      </Styled.Modal>
    </Styled.BackDrop>
  );
}
