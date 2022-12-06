import { Section } from 'components/Utils/Section';
import styled from 'styled-components';

export const FriendsSection = styled(Section)`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  width: 320px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  column-gap: 7px;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 13px 5px rgba(153, 153, 153, 0.55);
`;
