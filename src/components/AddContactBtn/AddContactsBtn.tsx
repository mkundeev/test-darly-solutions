import React from "react";
import * as Styled from "./AddContactBtn.styled";

interface IProps {
  onClick: () => void;
}
export default function AddContactsBtn({ onClick }: IProps) {
  return (
    <div>
      <Styled.AddContactBtn onClick={onClick} />
    </div>
  );
}
