import {
  StatsItem,
  StatsLabel,
  StatsList,
  StatsQuantity,
} from './Stats.styled';

export const Stats = ({
  user: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  );
};
