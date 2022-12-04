import React from "react";
import * as Styled from "./ActionBtn.styled";
interface IProps {
  onDelete: () => {};
  onEdit: () => {};
}
export default function ActionBtn({ onDelete, onEdit }: IProps) {
  return (
    <div>
      <Styled.SettingBtn onClick={onEdit} />
      <Styled.DeleteBtn onClick={onDelete} />
    </div>
  );
}
