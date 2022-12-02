import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <ul class="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <span isOnline={isOnline}></span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
