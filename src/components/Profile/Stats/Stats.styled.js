import styled from 'styled-components';
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: lightcyan;
  border: 0.5px solid lightgray;
`;
export const StatsItem = styled.li`
  padding: 15px 10px;
  width: calc(100% / 3);
  text-align: center;

  &:not(:last-child) {
    border-right: 0.5px solid lightgray;
  }
`;
export const StatsLabel = styled.span`
  display: block;
  font-size: 13px;
  color: #606b78;
`;
export const StatsQuantity = styled.span`
  display: block;
  font-size: 19;
  font-weight: bold;
  color: #212121;
`;
