import { Label, List, Percentage, StatsElement } from './StatisticList.Styled';

export const StatisticList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <StatsElement key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatsElement>
      ))}
    </List>
  );
};
