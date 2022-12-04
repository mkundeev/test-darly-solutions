import React from "react";
import { IContacts } from "../../types/data.types";
import * as Styled from "./TableRow.styled";

interface IProps {
  item: IContacts;
}
export default function TableRow({ item }: IProps) {
  return (
    <>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.status}</td>
      <td>Buttons</td>
    </>
  );
}
