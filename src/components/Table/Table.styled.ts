import styled from "styled-components";
import { COLORS, SPACES } from "../../theam";

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${COLORS.black};
  border-collapse: collapse;
  & th,
  td {
    padding: ${SPACES.s} ${SPACES.m};
    border: 1px solid ${COLORS.black};
  }
`;
export const TableHeade = styled.thead`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
`;
export const TableRow = styled.tr`
  &:nth-child(2n + 1) {
    background-color: ${COLORS.ligthGrey};
  }
  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }
`;
