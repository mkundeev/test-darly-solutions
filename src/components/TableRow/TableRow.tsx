import React from "react";
import FlexContainer from "../FlexContainer";
import { useTableRow } from "../../hooks/useTableRow.hook";
import { IContact } from "../../types/data.types";
import { SPACES } from "../../theam";
import * as Styled from "./TableRow.styled";

interface IProps {
  item: IContact;
}
export default function TableRow({ item }: IProps) {
  const { openModal, handleDelete } = useTableRow(item);
  return (
    <>
      <td>{item.name}</td>
      <td>{item.surename}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.status}</td>
      <td>
        <FlexContainer gap={SPACES.s}>
          <Styled.SettingBtn onClick={openModal} data-tip="Edite contact" />
          <Styled.DeleteBtn onClick={handleDelete} data-tip="Delete contact" />
        </FlexContainer>
      </td>
    </>
  );
}
