import { Section } from 'components/Utils/Section';
import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import { Title, Wrap } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Wrap>
        {title && <Title> {title}</Title>}
        <StatisticList stats={stats} />
      </Wrap>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
