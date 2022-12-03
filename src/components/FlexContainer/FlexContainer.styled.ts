import styled from 'styled-components';

export interface IPropsFlexContainer {
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
  marginTop?: string;
  gap?: string;
}

export const FlexContainer = styled.div<IPropsFlexContainer>`
  display: flex;
  gap: ${(p) => p.gap};
  justify-content: ${(p) => p.justifyContent};
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignItems};
  margin-top: ${(p) => p.marginTop};
`;
