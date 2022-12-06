import {
  Avatar,
  Wrap,
  Name,
  Tag,
  Location,
} from './Description.styled';
export const Description = ({ user: { avatar, username, tag, location } }) => {
  return (
    <Wrap>
      <Avatar src={avatar} alt={username} width="100px" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Wrap>
  );
};
