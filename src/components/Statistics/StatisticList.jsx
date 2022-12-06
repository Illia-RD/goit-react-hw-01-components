import { getRandomColor } from './getRandomColor';
import { Label, List, Percentage, StatsElement } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <StatsElement key={id} style={{ backgroundColor: getRandomColor(id) }}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatsElement>
      ))}
    </List>
  );
};
