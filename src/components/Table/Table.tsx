import React from "react";
import { useTable } from "../../hooks/useTable.hook";
import TableRow from "../TableRow";
import { IContact } from "../../types/data.types";
import * as Styled from "./Table.styled";

interface IProps {
  data: IContact[];
  fetchNextPage(): void;
  hasNextPage?: boolean;
}
export default function Table({ data, fetchNextPage, hasNextPage }: IProps) {
  const { containerRef } = useTable(data, fetchNextPage, hasNextPage);
  return (
    <div>
      <Styled.Table>
        <Styled.TableHeade>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
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
