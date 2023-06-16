import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  padding: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 30%;
  width: ${({ width }) => width};
`;

export const Name = styled.p`
  font-weight: 500;
  color: black;
`;
