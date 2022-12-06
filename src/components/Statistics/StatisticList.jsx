import { getRandomColor } from './getRandomColor';
import { Label, List, Percentage, Stats } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Stats key={id} style={{ backgroundColor: getRandomColor(id) }}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Stats>
      ))}
    </List>
  );
};
