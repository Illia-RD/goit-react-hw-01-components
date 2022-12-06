import {
  Avatar,
  DescriptionWrap,
  Name,
  Tag,
  Location,
} from './Description.styled';
export const Description = ({ user: { avatar, username, tag, location } }) => {
  return (
    <DescriptionWrap>
      <Avatar src={avatar} alt={username} width="100px" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionWrap>
  );
};
