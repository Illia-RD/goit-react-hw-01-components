import { Section } from 'components/Utils/Section';
import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import { Title, Box } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Box>
        {title && <Title> {title}</Title>}
        <StatisticList stats={stats} />
      </Box>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
