import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { List, FriendCard, FriendsSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsSection>
      <List>
        {friends.map(friend => (
          <FriendCard key={friend.id}>
            <Friend friend={friend} />
          </FriendCard>
        ))}
      </List>
    </FriendsSection>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
