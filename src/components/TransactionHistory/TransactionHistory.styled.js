import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  margin-bottom: 150px;
  padding: 20px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  color: black;
`;

export const Tbody = styled.tbody`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Thead = styled.thead`
  background-color: cyan;
`;

export const Th = styled.th`
  padding: 10px 50px;
  text-align: left;
  color: white;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 10px 50px;
  text-transform: ${({ isCapitalized }) => isCapitalized ? "capitalize" : "none"};
`;
