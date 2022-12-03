import React, { useRef, useEffect } from "react";
import { IContacts } from "../../types/data.types";
import TableRow from "../TableRow";
import * as Styled from "./Table.styled";

interface IProps {
  data: IContacts[];
  fetchNextPage(): void;
}
export default function Table({ data, fetchNextPage }: IProps) {
  const containerRef = useRef(null);

  const callBack = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };
  const options = {
    root: containerRef.current,
    rootMargin: "0px",
    threshold: 1.0,
  };

  return (
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
  );
}
