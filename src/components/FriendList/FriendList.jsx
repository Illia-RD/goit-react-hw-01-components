import { Section } from 'components/Utils/Section';
import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { List, FriendCard, Wrap } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <Wrap>
        <List>
          {friends.map(friend => (
            <FriendCard key={friend.id}>
              <Friend friend={friend} />
            </FriendCard>
          ))}
        </List>
      </Wrap>
    </Section>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
