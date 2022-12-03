import React from "react";
import { useTable } from "../../hooks/useTable.hook";
import TableRow from "../TableRow";
import { IContacts } from "../../types/data.types";
import * as Styled from "./Table.styled";

interface IProps {
  data: IContacts[];
  fetchNextPage(): void;
}
export default function Table({ data, fetchNextPage }: IProps) {
  const { containerRef } = useTable(data, fetchNextPage);
  return (
    <div>
      <Styled.Table>
        <Styled.TableHeade>
          <tr>
            <th>Name</th>
            <th>Surename</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </Styled.TableHeade>
        <tbody>
          {data.map((item) => (
            <Styled.TableRow key={item.id}>
              <TableRow item={item} />
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.Table>
      <Styled.Anchor ref={containerRef}></Styled.Anchor>
    </div>
  );
}
