import { Container } from 'components/Utils/Container';
import { Section } from 'components/Utils/Section';
import PropTypes from 'prop-types';
import {
  Avatar,
  FriendCard,
  List,
  Status,
  Nickname,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <Container>
        <List>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendCard key={id}>
              <Status></Status>
              <Avatar src={avatar} alt={name} width="48" />
              <Nickname>{name}</Nickname>
            </FriendCard>
          ))}
        </List>
      </Container>
    </Section>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
