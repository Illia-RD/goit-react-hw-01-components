import { Container } from 'components/Utils/Container';
import { Section } from 'components/Utils/Section';
import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import { Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Container>
        {title && <Title> {title}</Title>}
        <StatisticList stats={stats} />
      </Container>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
