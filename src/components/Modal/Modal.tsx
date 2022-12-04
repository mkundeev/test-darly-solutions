import React from "react";
import * as Styled from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}
export default function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <Styled.BackDrop onClick={onClose}></Styled.BackDrop>
      <Styled.Modal>
        <Styled.CloseIcon onClick={onClose} />
        {title && <Styled.Title>{title}</Styled.Title>}
        {children}
      </Styled.Modal>
    </>
  );
}
