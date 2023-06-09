import styled from 'styled-components';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export const StatsTitle = styled.h2`
  padding: 15px 30px;
  min-width: 300px;
  text-align: center;

  text-transform: uppercase;

  color: gray;
  background-color: white;
`;

export const StatsList = styled.ul`
  display: flex;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;

  text-align: center;
  background-color: ${getRandomColor};
  color: white;
`;

export const StatSpan = styled.span`
  margin: ${({margin}) => margin || 0};
`;
