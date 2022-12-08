import styled from 'styled-components';
export const Table = styled.table`
  width: 768px;
  margin: 0 auto;
  box-shadow: 0px 0px 13px 5px rgba(153, 153, 153, 0.55);
`;
export const Head = styled.thead`
  background-color: #00bcd5;
  text-transform: uppercase;
`;
export const Body = styled.tbody`
  background-color: #ffffff;
`;
export const Row = styled.tr`
  &:nth-child(2n + 2) {
    background: #ecf1f3;
  }
`;
