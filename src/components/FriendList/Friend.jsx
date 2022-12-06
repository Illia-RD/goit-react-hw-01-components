import { Avatar, Status, Nickname } from './Friend.styled';
import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status
        style={{ backgroundColor: isOnline === true ? 'green' : 'red' }}
      ></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Nickname>{name}</Nickname>
    </>
  );
};
Friend.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
