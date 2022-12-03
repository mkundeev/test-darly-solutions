import styled from 'styled-components';

interface IProps {
  checked: boolean;
}
export const Cell = styled.td<IProps>`
  text-decoration: ${(p) => p.checked && 'line-through'};
`;
