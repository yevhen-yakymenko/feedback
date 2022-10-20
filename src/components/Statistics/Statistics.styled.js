import styled from 'styled-components';

export const StatisticsList = styled.ul`
  padding: 0;
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  ::first-letter {
    text-transform: uppercase;
  }
`;
