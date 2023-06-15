import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  padding: 20px 0;

  border-left: solid;
  border-right: solid;
  border-color: var(--border-color);

  &:first-child,
  &:last-child {
    border: transparent;
  }
`;

export const Label = styled.span`
  color: black;
  margin-bottom: 6px;
  color: var(--secondary-text-light);
  text-transform: capitalize;
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: black;
`;
