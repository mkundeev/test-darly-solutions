import React from "react";
import { IContact } from "../../types/data.types";
import * as Styled from "./TableRow.styled";

interface IProps {
  item: IContact;
}
export default function TableRow({ item }: IProps) {
  return (
    <>
      <td>{item.name}</td>
      <td>{item.surename}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.status}</td>
      <td>Buttons</td>
    </>
  );
}
